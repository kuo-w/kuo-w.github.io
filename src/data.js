const yaml = require("js-yaml");
const fs = require("fs");
let doc;
// Get document, or throw exception on error
try {
  doc = yaml.safeLoad(fs.readFileSync("./data.yaml", "utf8"));
} catch (e) {
  console.log(e);
}

export const DATA = doc;
