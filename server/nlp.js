const db = require("./config/db");
const config = require("./config/requestinfo");
const axios = require("axios");

async function getCitiesFromGroups() {
  let groupNames = db.getGroupName();
  //   let uniqueGroupNames = [];
  //   for (const groupName in groupNames) {
  //   }

  //   axios
  //     .post(config.apartmentNLPAPI)
  //     .then((res) => {
  //       console.log(`statusCode: ${res.status}`);
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
}

async function getCityFromString(string) {
  const postedData = {
    categories: ["מקום"],
    text: string,
    token: config.hebrewNLPPassword,
  };
  try {
    console.log(postedData);
    let result = "";
    axios
      .post(config.apartmentNLPAPI, postedData)
      .then((response) => {
        console.log(response.data[0][0]);
        let x = response.data[0][0].categories[0]; //check if the NLP engine found a city
        if (x === "עיר") {
          console.log("city found!");
          console.log(response.data[0][0].entity);
          result = response.data[0][0].entity;
        }
      })
      .catch((error) => console.log(error));

    return result;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getCitiesFromGroups,
  getCityFromString,
};
