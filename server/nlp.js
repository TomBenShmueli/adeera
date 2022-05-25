const db = require("./config/db");
const config = require("./config/requestinfo");
const axios = require("axios");

async function getCitiesFromGroups() {
  let groupNames = db.getGroupName();
  for (const groupNAme in groupNames) {
    axios
      .post(config.apartmentNLPAPI)
      .then((res) => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
