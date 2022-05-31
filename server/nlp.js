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

  axios
    .post(config.apartmentNLPAPI, postedData)
    .then((response) => (element.innerHTML = response.data.id));
}

module.exports = {
  getCitiesFromGroups,
  getCityFromString,
};
