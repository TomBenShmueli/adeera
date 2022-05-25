const { type, json } = require("express/lib/response");
const dbModule = require("./config/db");
const bodyParser = require("body-parser");

module.exports = {
  parseApts: function (apartmentsResult) {
    try {
      var apartments = [];
      var Array = apartmentsResult;
      Array.forEach((stringElement) => {
        console.log("parse apts element called");
        //extract data from json result

        jsonElement = JSON.parse(stringElement);
        let apt = {};
        let jsonElementGroupName = undefined;
        if (jsonElement.with && jsonElement.with.length > 0) {
          jsonElementGroupName = jsonElement.with[0].name;
        }

        apt.post_id = jsonElement.post_id;
        apt.text = jsonElement.text;
        apt.post_date = jsonElement.time;
        apt.images = jsonElement.images;
        apt.images_description = jsonElement.images_description;
        apt.video = jsonElement.video;
        apt.comments = jsonElement.comments;
        apt.post_url = jsonElement.post_url;
        apt.user_id = jsonElement.user_id;
        apt.user_name = jsonElement.user_name;
        apt.group_name = jsonElementGroupName;
        apt.listing_price = jsonElement.listing_price;
        console.log("apt_groupname" + apt.group_name);
        console.log("typeof" + typeof apt.group_name);
        console.log("jsonelementgroupname" + jsonElementGroupName);
        apartments.push(apt);
      });
      console.log("trying to save...");
      dbModule.saveApartments(apartments);
    } catch (err) {
      console.log(err);
    }
  },
};
