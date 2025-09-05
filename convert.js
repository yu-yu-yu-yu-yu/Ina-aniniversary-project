const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");
const fetch = require("node-fetch");

const inputCSV = "./src/static/form.csv";
const prepdatav3Input = "./public/data/prepdatav3.json";
const timelineMessagesInput = "./src/static/TimelineMessages.json";
const takoEntriesInput = "./public/data/TakoEntries.json";
const prepdatav3Output = "./public/data/prepdatapv.json";
const timelineMessagesOutput = "./public/data/timelinepv.json";
const takoEntriesOutput = "./public/data/entriespv.json";

const prepdatav3 = [];
const timelineMessages = [];
const takoEntries = [];

let artworkIndex = 86;
let takosIndex = 73;

// Read original JSON files
const origPrepdatav3 = fs.existsSync(prepdatav3Input)
  ? JSON.parse(fs.readFileSync(prepdatav3Input, "utf8"))
  : [];
const origTimelineMessages = fs.existsSync(timelineMessagesInput)
  ? JSON.parse(fs.readFileSync(timelineMessagesInput, "utf8"))
  : [];
const origTakoEntries = fs.existsSync(takoEntriesInput)
  ? JSON.parse(fs.readFileSync(takoEntriesInput, "utf8"))
  : [];

// Add arrays to collect download jobs
const artworkDownloads = [];
const takoDownloads = [];
const takosDownloads = [];

fs.createReadStream(inputCSV)
  .pipe(csv())
  .on("data", (row) => {
    // prepdatav3: messages and art
    if (row["Anniversary Message Submission"] || row["Art Submission"]) {
      let imageFilename = "";
      if (row["Art Submission"] && row["Art Submission"].startsWith("http")) {
        imageFilename = `${artworkIndex}.png`;
        artworkDownloads.push({
          url: row["Art Submission"],
          filepath: path.join("C:\\Users\\karim\\Documents\\Ina-aniniversary-project\\public\\Images", imageFilename),
        });
        artworkIndex++;
      }
      prepdatav3.push({
        user: row["Your Display Name"] || row["Discord Name"] || "",
        icon: "",
        message: row["Anniversary Message Submission"].replace("/n","<br>") || "",
        image: imageFilename,
      });
    }

    // timelineMessages: favorite streams
    function cleanLabel(label) {
      if (!label) return "";
      return label.split(" -->")[0].trim();
    }

    if (row["Select your 1st Favorite Stream"] && row["Message for your 1st Favorite Stream"]) {
      timelineMessages.push({
        label: cleanLabel(row["Select your 1st Favorite Stream"]),
        tako1: row["Your Display Name"] || "",
        takoMessage1: row["Message for your 1st Favorite Stream"] || "",
        tako2: "",
        takoMessage2: "",
        tako3: "",
        takoMessage3: "",
      });
    }
    if (row["Select your 2nd Favorite Stream"] && row["Message for your 2nd Favorite Stream"]) {
      timelineMessages.push({
        label: cleanLabel(row["Select your 2nd Favorite Stream"]),
        tako1: row["Your Display Name"] || "",
        takoMessage1: row["Message for your 2nd Favorite Stream"] || "",
        tako2: "",
        takoMessage2: "",
        tako3: "",
        takoMessage3: "",
      });
    }
    if (row["Select your 3rd Favorite Stream"] && row["Message for your 3rd Favorite Stream"]) {
      timelineMessages.push({
        label: cleanLabel(row["Select your 3rd Favorite Stream"]),
        tako1: row["Your Display Name"] || "",
        takoMessage1: row["Message for your 3rd Favorite Stream"] || "",
        tako2: "",
        takoMessage2: "",
        tako3: "",
        takoMessage3: "",
      });
    }

    // takoEntries: takodachi submissions
    if (row["Your Takodachi's Name"] || row["Your Takodachi's Description"]) {
      let description = row["Your Takodachi's Description"] || "";
      let category = "";
      let attributes = "";

      // Parse category
      const categoryMatch = description.match(/(?:Category|Class)\s*:\s*([^\n\r]*)/i);
      if (categoryMatch) {
        category = categoryMatch[1].trim();
      }

      // Parse attributes
      const attributesMatch = description.match(/Attributes?\s*:\s*([^\n\r]*)/i);
      if (attributesMatch) {
        attributes = attributesMatch[1].trim();
      }

      description = description
        .replace(/(?:Category|Class)\s*:\s*[^\n\r]*[\n\r]?/i, "")
        .replace(/Attributes?\s*:\s*[^\n\r]*[\n\r]?/i, "")
        .replace("/n","<br>")
        .trim();

      let takoImageFilename = "";
      if (row["Your own Takodachi!"] && row["Your own Takodachi!"].startsWith("http")) {
        // Download image from "Your own Takodachi!" link
        takoImageFilename = `${(row["Your Display Name"] || "").replace(/ /g, "")}.png`;
        takoDownloads.push({
          url: row["Your own Takodachi!"],
          filepath: path.join("C:\\Users\\karim\\Documents\\Ina-aniniversary-project\\public\\takoswentries", takoImageFilename),
        });
      } else {
        // If not a link, use the filename or leave empty
        takoImageFilename = row["Your own Takodachi!"] || "";
      }
      takoEntries.push({
        author: row["Your Display Name"] || row["Discord Name"] || "",
        name: row["Your Takodachi's Name"] || "",
        category,
        attributes,
        description,
        image: takoImageFilename,
      });
    }

    // Download takodachi image to "takos" folder with sequential number
    if (row["Your own Takodachi!"] && row["Your own Takodachi!"].startsWith("http")) {
      const takosImageFilename = `${takosIndex}.png`;
      takosDownloads.push({
        url: row["Your own Takodachi!"],
        filepath: path.join("C:\\Users\\karim\\Documents\\Ina-aniniversary-project\\public\\takos", takosImageFilename),
      });
      takosIndex++;
    }
  })
  .on("end", async () => {
    fs.writeFileSync(prepdatav3Output, JSON.stringify([...origPrepdatav3, ...prepdatav3], null, 2));
    console.log("prepdatapv.json written");

    function mergeTimelineMessages(oldEntries, newEntries) {
      // Map by label for quick lookup
      const oldMap = Object.fromEntries(oldEntries.map(e => [e.label, { ...e }]));

      for (const newEntry of newEntries) {
        const label = newEntry.label;
        if (!label) continue;
        let stream = oldMap[label];
        if (!stream) {
          // If stream doesn't exist, add new entry
          oldMap[label] = { ...newEntry };
          continue;
        }
        // For each author/message pair in newEntry, try to add/update in stream
        for (let i = 1; i <= 3; i++) {
          const author = newEntry[`tako${i}`];
          const message = newEntry[`takoMessage${i}`];
          if (!author) continue;
          let placed = false;
          // Check if author already exists in any slot, update message if so
          for (let j = 1; j <= 3; j++) {
            if (stream[`tako${j}`] === author) {
              stream[`takoMessage${j}`] = message;
              placed = true;
              break;
            }
          }
          // If not placed, find first empty slot
          if (!placed) {
            for (let j = 1; j <= 3; j++) {
              if (!stream[`tako${j}`]) {
                stream[`tako${j}`] = author;
                stream[`takoMessage${j}`] = message;
                placed = true;
                break;
              }
            }
          }
          // If all slots are filled and author not present, skip
        }
      }
      // Return as array
      return Object.values(oldMap);
    }

    const mergedTimelineMessages = mergeTimelineMessages(origTimelineMessages, timelineMessages);
    fs.writeFileSync(timelineMessagesOutput, JSON.stringify(mergedTimelineMessages, null, 2));
    console.log("timelinepv.json written");

    function mergeTakoEntries(oldEntries, newEntries) {
      // Build a map from author+name to entry for new data
      const key = (entry) => `${entry.author}|||${entry.name}`;
      const newMap = Object.fromEntries(newEntries.map(e => [key(e), e]));

      // Merge: if new exists, use new; else keep old
      const merged = [];
      const seenKeys = new Set();

      for (const old of oldEntries) {
        const k = key(old);
        if (newMap[k]) {
          merged.push(newMap[k]);
          seenKeys.add(k);
        } else {
          merged.push(old);
          seenKeys.add(k);
        }
      }
      // Add any new entries not in old
      for (const k in newMap) {
        if (!seenKeys.has(k)) {
          merged.push(newMap[k]);
        }
      }
      return merged;
    }

    const mergedTakoEntries = mergeTakoEntries(origTakoEntries, takoEntries);
    fs.writeFileSync(takoEntriesOutput, JSON.stringify(mergedTakoEntries, null, 2));
    console.log("TakoEntries.json written");

    // Download images (artwork and takoswentries)
    for (const job of artworkDownloads) {
      await downloadImage(job.url, job.filepath);
    }
    for (const job of takoDownloads) {
      await downloadImage(job.url, job.filepath);
    }
    // Download takodachis to "takos" folder
    for (const job of takosDownloads) {
      await downloadImage(job.url, job.filepath);
    }
  });

function getDirectImageUrl(url) {
  // Google Drive link conversion
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
    if (!res.ok) throw new Error(`Failed to fetch ${directUrl}: ${res.statusText}`);
    const buffer = await res.buffer();
    fs.writeFileSync(filepath, buffer);
    console.log(`Downloaded: ${filepath}`);
  } catch (err) {
    console.error(`Error downloading ${url}: ${err.message}`);
  }
}