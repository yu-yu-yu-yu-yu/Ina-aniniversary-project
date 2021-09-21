const fs = require("fs");
const https = require("https");

const dataSource = require("./src/static/Ina Anniversary Milestones.json");
const destination = "./public/images/timeline/";

const download = async (url, dest, cb) => {
  const file = fs.createWriteStream(dest);

  const request = https.get(url, (response) => {
    // check if response is success
    if (response.statusCode !== 200) {
      return cb("Response status was " + response.statusCode);
    }

    response.pipe(file);
  });

  // close() is async, call cb after close completes
  file.on("finish", () => file.close(cb));

  // check for request error too
  request.on("error", (err) => {
    fs.unlink(dest);
    return cb(err.message);
  });

  file.on("error", (err) => {
    // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    return cb(err.message);
  });
};

async function downloadTimelineImages(dataSource) {
  for (const { media } of dataSource) {
    const isDiscord = media.includes("discord");
    const filename = isDiscord
      ? media.replace(/.*\/(.+)$/, "$1")
      : media.replace(/.*\/(.+)\/.+\.(.+)$/, "$1.$2");
    await download(media, destination + filename, console.log);
  }
}

downloadTimelineImages(dataSource).catch(console.error);
