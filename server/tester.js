const parser = require("./parser");

module.exports = {
  testDBSave() {
    const fs = require("fs");
    const raw = require("body-parser/lib/types/raw");

    let rawdata = fs.readFileSync("config/test.json");
    let jsonArr = [];
    jsonArr.push(rawdata);
    parser.parseApts(jsonArr);
  },
};
