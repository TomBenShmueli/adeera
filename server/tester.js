const parser = require("./parser");
const db = require("./config/db");
const nlp = require("./nlp");
const fs = require("fs");

module.exports = {
  testDBSave() {
    let rawdata = fs.readFileSync("config/test.json");
    let jsonArr = [];
    jsonArr.push(rawdata);
    parser.parseApts(jsonArr);
    console.log("db save test ended");
  },
  async testDBGetCities() {
    const x = await db.getGroupName();
    console.log("get db groups res: " + x);
  },
  async testDBGetApartments() {
    const x = await db.getApartments();
    console.log("get db apartments res: " + x);
  },
  async testUniqueCitiesAPI() {
    const x = await nlp.getCitiesFromGroups();
    console.log("city unique NLP res: " + x);
  },
  async testAxiosNLPCityName() {
    const x = await nlp.getCityFromString("להשכרה ריקות או שותפים בתל אביב");
    console.log("city NLP res: " + x);
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
    const fileContents = fs.readFileSync("./dummy.json").toString();
    let x = fileContents;
    parser.parseApts(x);
  },
};
