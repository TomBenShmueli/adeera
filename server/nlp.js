const db = require("./config/db");
const config = require("./config/requestinfo");
const axios = require("axios");

async function getCitiesFromGroups() {
  let groupNames = await db.getGroupName();
  let collectedCities = [];

  //iterate over all group names
  for (const groupName in groupNames) {
    let x = await getCityFromString(groupName);
    collectedCities.push(x);
  }

  //return unique
  return Array.from(new Set(collectedCities));
}

async function getCityFromString(string) {
  //prep payload
  console.log(string);
  const postedData = {
    categories: ["מקום"],
    text: string,
    token: config.hebrewNLPPassword,
  };
  //send payload
  try {
    console.log(postedData);
    let result = "";
    axios
      .post(config.apartmentNLPAPI, postedData)
      .then((response) => {
        console.log(response.data[0][0]);
        let x = response.data[0][0].categories[0]; //check if the NLP engine found a city and return if true
        if (x === "עיר") {
          console.log("city found!");
          console.log(response.data[0][0].entity);
          result = response.data[0][0].entity;
        }
      })
      .catch((error) => console.log(error));

    console.log(result);
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
