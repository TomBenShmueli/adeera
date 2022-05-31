const parser = require("./parser");
const db = require("./config/db");
const nlp = require("./nlp");

module.exports = {
  testDBSave() {
    const fs = require("fs");
    const raw = require("body-parser/lib/types/raw");

    let rawdata = fs.readFileSync("config/test.json");
    let jsonArr = [];
    jsonArr.push(rawdata);
    parser.parseApts(jsonArr);
  },
  testDBGetCities() {
    console.log(db.getGroupName());
  },
  testDBGetApartments() {
    console.log(db.getApartments());
  },
  testAxiosNLPCityName() {
    console.log(nlp.getCityFromString("רמת גן"));
  },
};
