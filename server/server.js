// app.js

//*********************************modules****************/

const express = require("express");
var cors = require("cors");
const { spawn } = require("child_process");
const scraper = require("./scraper");
const parser = require("./parser");
const tester = require("./tester");
const nlp = require("./nlp");
const db = require("./config/db");

//*********************************Application****************/

const app = express();
const port = process.env.PORT || 8082;

//*********************************Apartment Scraping****************************/

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// Apartment API
app.get("/api/apartments", async (req, res) => {
  let apartments = await db.getApartments();
  // console.log(apartments);
  res.send(apartments);
});

// Cities API
app.get("/api/cities", async (req, res) => {
  let uniqueCities = await nlp.getCitiesFromGroups();
  res.send(uniqueCities);
});

//*********************************General**************************************/

app.listen(port, (req, res) => {
  console.log(`Server is now running on port ${port}.`);
});

// scraper.initScrapingCycle();

//*********************************Testers*************************************/
//tester.testDBSave();
//tester.testDBGetApartments();
//tester.testDBGetCities();
//tester.testUniqueCitiesAPI();
//tester.testAxiosNLPCityName();
//tester.testNumberOfRooms("string", false);
//tester.testParser();
