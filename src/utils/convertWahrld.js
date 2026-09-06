const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const fetch = require("node-fetch");

const FORM_INPUT = path.join(__dirname, "../static/wahrldForm.csv");
const OUTPUT = path.join(__dirname, "../../public/data/wahrldpv.json");
const SUBMISSION_MEDIA_DIR = path.join(
  __dirname,
  "../../public/wahrldSubmissions",
);

const MAX_PER_PERSON = 3;
const MIN_DIMENSION = 1024;
const MAX_DIMENSION = 4096;

function normalizeCountry(raw) {
  const value = (raw || "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(value) ? value : undefined;
}

function personKey(row) {
  return row["Discord Name"] || row["Display Name"] || "";
}

function slotKey(row) {
  return `${personKey(row)}|||${row["Slot"] || row["Timestamp"]}`;
}

function buildEntries({ rows = [] }) {
  const latestBySlot = new Map();
  for (const row of rows) {
    latestBySlot.set(slotKey(row), row);
  }

  const perPersonCount = new Map();
  const entries = [];
  const rejected = [];
  const flaggedForReview = [];

  for (const row of Array.from(latestBySlot.values())) {
    const user = row["Display Name"] || row["Discord Name"] || "";
    const identity = personKey(row);
    const count = perPersonCount.get(identity) || 0;
    if (count >= MAX_PER_PERSON) {
      rejected.push({ user, reason: "3 submissions already used" });
      continue;
    }

    const fileLink = row["File Link"];
    const message = row["Message"] || "";
    if (!fileLink && !message) continue;

    const entry = {
      user,
      icon: row["Icon"] || undefined,
      country: normalizeCountry(row["Country"]),
      message: message || undefined,
      file: fileLink || "",
      kind: row["Kind"] === "video" ? "video" : "image",
      socials: row["Socials"] || undefined,
    };

    if (fileLink && row["Kind"] !== "video") {
      const width = Number(row["Width"]);
      const height = Number(row["Height"]);
      if (
        width &&
        height &&
        (width < MIN_DIMENSION ||
          height < MIN_DIMENSION ||
          width > MAX_DIMENSION ||
          height > MAX_DIMENSION)
      ) {
        flaggedForReview.push({
          user,
          reason: `image is ${width}x${height}, outside 1024-4096`,
        });
        continue;
      }
    }

    entries.push(entry);
    perPersonCount.set(identity, count + 1);
  }

  return { entries, rejected, flaggedForReview };
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

function getDirectImageUrl(url) {
  const driveMatch = url.match(/drive\.google\.com\/.*id=([^&]+)/);
  if (driveMatch) {
    return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
  }
  return url;
}

async function downloadFile(url, filepath) {
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

async function downloadEntryMedia(entries) {
  fs.mkdirSync(SUBMISSION_MEDIA_DIR, { recursive: true });
  let counter = 0;
  for (const entry of entries) {
    if (!entry.file || !entry.file.startsWith("http")) continue;
    const ext = entry.kind === "video" ? "mp4" : "png";
    const filename = `${entry.user.replace(/ /g, "")}-${counter++}.${ext}`;
    await downloadFile(entry.file, path.join(SUBMISSION_MEDIA_DIR, filename));
    entry.file = filename;
  }
}

async function convertWahrld() {
  const rows = await readCsvRows(FORM_INPUT);
  const { entries, rejected, flaggedForReview } = buildEntries({ rows });

  await downloadEntryMedia(entries);

  fs.writeFileSync(OUTPUT, JSON.stringify(entries, null, 2));
  console.log(`wahrldpv.json written with ${entries.length} entries`);

  if (flaggedForReview.length) {
    console.log("Flagged for review (outside size limits):");
    flaggedForReview.forEach((f) => console.log(`  - ${f.user} (${f.reason})`));
  }

  if (rejected.length) {
    console.log("Rejected submissions (per-person cap reached):");
    rejected.forEach((r) => console.log(`  - ${r.user} (${r.reason})`));
  }

  return { entries, rejected, flaggedForReview };
}

if (require.main === module) {
  convertWahrld().catch(console.error);
}

module.exports = { convertWahrld, buildEntries, normalizeCountry };
