// app.js

//*********************************modules****************/

const express = require("express");
var cors = require("cors");
const { spawn } = require("child_process");
const scraper = require("./scraper");
const parser = require("./parser");
const testJSON = require("./config/test.json");
const tester = require("./tester");
const nlp = require("./nlp");

//*********************************Application****************/

const app = express();
const port = process.env.PORT || 8082;

//*********************************Apartment Scraping****************************/

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// Apartment API
app.get("api/apartments", (req, res) => {
  let apartments = db.getApartments();
  res.send(apartments);
});

// Cities API
app.get("api/cities", (req, res) => {});

//*********************************General**************************************/

app.listen(port, (req, res) => {});

//scraper.initScrapingCycle();

//*********************************Testers**************************************/
//tester.testDBSave();
//tester.testDBGetCities();
