// app.js

const express = require("express");
const passport = require("passport");
const db = require("./config/db");
const parser = require("./parser");
var cors = require("cors");
var request = require("request-promise");
const { spawn } = require("child_process");
const scraper = require("./scraper");
const { Server } = require("http");
// routes

const app = express();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello.");
});

app.get("api/apartments", (req, res) => {
  let apartments = db.getApartments();
  res.send(apartments);
});

const port = process.env.PORT || 8082;

app.listen(port, (req, res) => {});

scraper.initScrapingCycle();
