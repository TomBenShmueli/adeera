const { type, json } = require("express/lib/response");
const dbModule = require("./config/db");
const bodyParser = require("body-parser");
const nlp = require("./nlp");

module.exports = {
  parseApts: async function (apartmentsResult) {
    try {
      var apartments = [];
      var Array = apartmentsResult;
      Array.forEach(async (stringElement) => {
        //extract data from json result

        jsonElement = JSON.parse(stringElement);
        let apt = {};
        let jsonElementGroupName = undefined;
        if (jsonElement.with && jsonElement.with.length > 0) {
          jsonElementGroupName = jsonElement.with[0].name;
          if (jsonElementGroupName === "post") {
            return; //skip iteration
          }
        }

        apt.post_id = jsonElement.post_id;
        apt.text = jsonElement.text;
        apt.post_date = jsonElement.time;
        apt.images = jsonElement.images_lowquality;
        apt.images_description = jsonElement.images_description;
        apt.video = jsonElement.video;
        apt.comments = jsonElement.comments;
        apt.post_url = jsonElement.post_url;
        apt.user_id = jsonElement.user_id;
        apt.user_name = jsonElement.user_name;
        apt.group_name = jsonElementGroupName;
        apt.listing_price = jsonElement.listing_price;
        apt.number_of_rooms =
          jsonElement.text == null ? "" : nlp.getHowManyRooms(jsonElement.text);
        apt.city = "Tel Aviv";
        console.log("jsonelementgroupname" + jsonElementGroupName);
        apartments.push(apt);
      });
      for (const apartment in apartments) {
        apartment.city = await this.getCityFromString(apartment.group_name);
      }
      console.log("trying to save...");
      //dbModule.saveApartments(apartments);
    } catch (err) {
      console.log(err);
    }
  },
  getCityFromString: async function (groupName) {
    return await nlp.getCityFromString(groupName);
  },
};
