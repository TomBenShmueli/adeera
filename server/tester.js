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
  async testDBGetCities() {
    const x = await db.getGroupName();
    console.log(x);
  },
  async testDBGetApartments() {
    const x = await db.getApartments();
    console.log(x);
  },
  async testAxiosNLPCityName() {
    const x = await nlp.getCityFromString("להשכרה ריקות או שותפים בתל אביב");
    console.log(x);
  },
};
