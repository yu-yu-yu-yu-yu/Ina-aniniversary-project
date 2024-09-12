const fs = require("fs");
const csv = require("csv-parser");

const inputFiles = [
  "./public/data/video.csv",
  // "./src/static/Ina Anniversary Milestones.csv",
];

async function convertCSV(inputFiles) {
  for (const filepath of inputFiles) {
    const csv_by_line = [];
    await fs
      .createReadStream(filepath)
      .pipe(csv())
      .on("data", (data) => {
        csv_by_line.push(data);
      })
      .on("end", () =>
        fs.writeFile(
          filepath.replace(/(.*)\..+?$/, `$1.json`),
          JSON.stringify(csv_by_line),
          (err) => {
            if (err) throw err;
          }
        )
      );
  }
}

convertCSV(inputFiles).catch(console.error);
