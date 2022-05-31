const parser = require("./parser");
const db = require("./config/db");
const nlp = require("./nlp");
const fs = require("fs");
const fileContents = fs.readFileSync("./dummy.json").toString();

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
  async testNumberOfRooms(text, isDynamic) {
    let x = text;
    if (!isDynamic) {
      x =
        "בלב העיר בשיינקין רוטשילד מתאימה ל3 שותפים!!! דירת 3.5 חדרים קומה ראשונה כ77 מטר יש 2 חדרי שינה גדולים, 1 חדר שינה קטן (חצי חדר), לון, מטבח, חדר רחצה ושירותים (עם מקום למכונת כביסה) וחדר שירותים נוסף דירה שמורה ניתן בעלי חיים כניסה 26.6 ";
    }
    console.log(nlp.getHowManyRooms(x));
  },
  async testParser() {
    let x = fileContents;
    parser.parseApts(x);
  },
};
