const fs = require("fs");
const csv = require("csv-parser");
const _ = require("lodash");

const IMG_PATH = "./public/images";
const TAKO_PATH = "./public/takos";
const CSV_PATH = "./public/data/prepdatav3.csv";
const filenameDictionary = "./renamedTakos.txt";

const csvWriter = require("csv-writer").createObjectCsvWriter({
  path: CSV_PATH,
  header: [
    { id: "user", title: "user" },
    { id: "icon", title: "icon" },
    { id: "message", title: "message" },
    { id: "image", title: "image" },
    { id: "pun", title: "pun" },
  ],
});

let i = 0;

async function renameFiles(path) {
  const filenames = await fs.promises.readdir(path);
  const filename_pairs = filenames.map((filename) => [
    filename,
    filename.replace(/.+\.(.+?)$/, `${i++}.$1`),
  ]);
  await fs.writeFile(
    filenameDictionary,
    Buffer.from(filename_pairs.map((pair) => pair.join(" ")).join("\n")),
    (err) => {
      if (err) throw err;
      console.log("filename map saved");
    }
  );
  const filenames_map = _.fromPairs(filename_pairs.map(([name, newname]) =>
      [name, newname] ));
  const csv_by_line = [];

  await fs
    .createReadStream(CSV_PATH)
    .pipe(csv())
    .on("data", (data) => {
      if (data.icon) {
        data.icon = filenames_map[data.icon];
      }
      csv_by_line.push(data);
    })
    .on("end", () => csvWriter.writeRecords(csv_by_line));

  for (const filename of filenames) {
     fs.rename(
      `${path}/${filename}`,
      `${path}/${filenames_map[filename]}`,
      (err) => {
        if (err) throw err;
      }
    );
  }
}

renameFiles(TAKO_PATH).catch(console.error);
