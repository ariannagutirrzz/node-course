const picocolors = require("picocolors");
const fs = require("node:fs/promises");

fs.readdir("./")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((error) => {
    if (err) {
      console.error(picocolors.red("error: ", error));
    }
  });
