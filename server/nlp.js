const db = require("./config/db");
const config = require("./config/requestinfo");
const request = require("request-promise");
const res = require("express/lib/response");

async function getCitiesFromGroups() {
  const groupNames = await db.getGroupName();
  let collectedCities = [];

  //iterate over all group names
  for (let index = 0; index < groupNames.length; index++) {
    const element = groupNames[index];
    let x = await getCityFromString(element.group_name);
    collectedCities.push(x);
  }

  //return unique
  return Array.from(new Set(collectedCities));
}

async function getCityFromString(string) {
  //prep payload
  if (string === "undefined") {
    return;
  }
  let result = "";
  let resultArray = [];
  const postedData = {
    categories: ["מקום"],
    text: string,
    token: config.hebrewNLPPassword,
  };
  //send payload
  try {
    var options = {
      uri: config.apartmentNLPAPI,
      method: "POST",
      json: postedData,
    };

    await request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resultArray = response.body[0];
        resultArray.forEach((jsonElement) => {
          if (
            jsonElement.categories[0] &&
            jsonElement.categories[0] === "עיר"
          ) {
            result = jsonElement.entity;
          }
        });
      } else {
        console.log(error);
      }
    });
    return result;
  } catch (err) {
    console.log(err);
  }
}

function getHowManyRooms(text) {
  const words = text.split(" ");
  const wordRoom = "חדרים";
  let index = 0;
  let result = "";

  words.forEach((word) => {
    if (word === wordRoom) {
      if (!isNaN(words[index - 1])) {
        // check if the word before was a number
        result = words[index - 1];
      } else {
        if (!isNaN(words[index + 1])) {
          // check if the word before was a number
          result = words[index + 1];
        }
      }
    }
    index++;
  });
  return result;
}

module.exports = {
  getCitiesFromGroups,
  getCityFromString,
  getHowManyRooms,
};
