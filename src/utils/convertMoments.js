const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const fetch = require("node-fetch");

const FORM_A_INPUT = path.join(__dirname, "../static/momentsFormA.csv");
const FORM_B_INPUT = path.join(__dirname, "../static/momentsFormB.csv");
const CURRENT_MOMENTS = path.join(
  __dirname,
  "../../public/data/momentsData.json",
);
const OUTPUT = path.join(__dirname, "../../public/data/momentspv.json");
const PENDING_OUTPUT = path.join(
  __dirname,
  "../../public/data/momentsPendingApproval.json",
);
const TRIBUTE_MEDIA_DIR = path.join(__dirname, "../../public/moments");

const VALID_CATEGORIES = new Set(["milestone", "myth", "funny"]);
const EXT_BY_KIND = { image: "png", gif: "gif", video: "mp4" };

function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeCategory(raw) {
  const value = (raw || "").toLowerCase().trim();
  return VALID_CATEGORIES.has(value) ? value : "milestone";
}

function buildMoments({
  existingMoments = [],
  nominationRows = [],
  tributeRows = [],
}) {
  const momentsBySlug = new Map(
    existingMoments.map((m) => [m.slug, { ...m, tributes: [...m.tributes] }]),
  );
  const rejected = [];
  const pendingApproval = [];

  for (const row of nominationRows) {
    const title = row["Moment Title"];
    const sourceUrl = row["Moment Source Link"];
    if (title && sourceUrl) {
      const slug = slugify(title);
      if (!momentsBySlug.has(slug)) {
        momentsBySlug.set(slug, {
          slug,
          title,
          category: normalizeCategory(row["Category"]),
          date: row["Moment Date"] || "TBD",
          sourceUrl,
          sourceLabel: row["Source Label"] || "",
          context: row["Moment Description"] || "",
          cap: /^y/i.test(row["Big Moment"] || "") ? 3 : 2,
          tributes: [],
        });
      }
    }

    const contentLink = row["Content Link"];
    if (contentLink && title) {
      pendingApproval.push({
        moment: title,
        contentLink,
        creatorHandle: row["Creator Handle"] || "",
        canReachCreator: row["Can you reach the creator?"] || "",
        submittedBy: row["Display Name"] || row["Discord Name"] || "",
      });
    }
  }

  const sortedTributeRows = [...tributeRows].sort(
    (a, b) => new Date(a["Timestamp"]) - new Date(b["Timestamp"]),
  );

  for (const row of sortedTributeRows) {
    const title = row["Moment Title"];
    const fileLink = row["Tribute File Link"];
    const submitter = row["Display Name"] || row["Discord Name"] || "";
    if (!title || !fileLink) continue;

    const slug = slugify(title);
    const moment = momentsBySlug.get(slug);
    if (!moment) {
      rejected.push({ moment: title, submitter, reason: "moment not found" });
      continue;
    }
    if (moment.tributes.length >= moment.cap) {
      rejected.push({
        moment: moment.title,
        submitter,
        reason: "moment is full",
      });
      continue;
    }
    moment.tributes.push({
      author: submitter,
      handle: row["Credit Handle"] || undefined,
      url: row["Socials Link"] || undefined,
      file: fileLink,
      kind: row["Tribute Kind"] || "image",
    });
  }

  return {
    moments: Array.from(momentsBySlug.values()),
    rejected,
    pendingApproval,
  };
}

function getDirectImageUrl(url) {
  const driveMatch = url.match(/drive\.google\.com\/.*id=([^&]+)/);
  if (driveMatch) {
    return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
  }
  return url;
}

async function downloadImage(url, filepath) {
  try {
    if (fs.existsSync(filepath)) {
      console.log(`Skipped (already exists): ${filepath}`);
      return;
    }
    const directUrl = getDirectImageUrl(url);
    const res = await fetch(directUrl);
    if (!res.ok)
      throw new Error(`Failed to fetch ${directUrl}: ${res.statusText}`);
    const buffer = await res.buffer();
    fs.writeFileSync(filepath, buffer);
    console.log(`Downloaded: ${filepath}`);
  } catch (err) {
    console.error(`Error downloading ${url}: ${err.message}`);
  }
}

function readCsvRows(filepath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filepath)) {
      resolve([]);
      return;
    }
    const rows = [];
    fs.createReadStream(filepath)
      .pipe(csv())
      .on("data", (row) => rows.push(row))
      .on("end", () => resolve(rows))
      .on("error", reject);
  });
}

async function downloadTributeMedia(moments) {
  let counter = 0;
  for (const moment of moments) {
    for (const tribute of moment.tributes) {
      if (!tribute.file || !tribute.file.startsWith("http")) continue;
      const ext = EXT_BY_KIND[tribute.kind] || "png";
      const filename = `${moment.slug}-${counter++}.${ext}`;
      const dir = path.join(TRIBUTE_MEDIA_DIR, moment.slug);
      fs.mkdirSync(dir, { recursive: true });
      await downloadImage(tribute.file, path.join(dir, filename));
      tribute.file = filename;
    }
  }
}

async function convertMoments() {
  const [nominationRows, tributeRows] = await Promise.all([
    readCsvRows(FORM_B_INPUT),
    readCsvRows(FORM_A_INPUT),
  ]);
  const existingMoments = fs.existsSync(CURRENT_MOMENTS)
    ? JSON.parse(fs.readFileSync(CURRENT_MOMENTS, "utf8"))
    : [];

  const { moments, rejected, pendingApproval } = buildMoments({
    existingMoments,
    nominationRows,
    tributeRows,
  });

  await downloadTributeMedia(moments);

  fs.writeFileSync(OUTPUT, JSON.stringify(moments, null, 2));
  console.log(`momentspv.json written with ${moments.length} moments`);

  fs.writeFileSync(PENDING_OUTPUT, JSON.stringify(pendingApproval, null, 2));
  if (pendingApproval.length) {
    console.log(
      `${pendingApproval.length} nominated works awaiting creator approval: see momentsPendingApproval.json`,
    );
  }

  if (rejected.length) {
    console.log("Rejected submissions (cap reached or unknown moment):");
    rejected.forEach((r) =>
      console.log(`  - ${r.submitter} -> "${r.moment}" (${r.reason})`),
    );
  }

  return { moments, rejected, pendingApproval };
}

if (require.main === module) {
  convertMoments().catch(console.error);
}

module.exports = { convertMoments, buildMoments, slugify };
