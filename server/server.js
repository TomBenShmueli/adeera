// app.js

const express = require('express');
const parser = require('./parser');
const scraper = require('./scraper')
var cors = require('cors');
var request = require('request-promise');
const { spawn } = require('child_process');
// routes

const app = express();


// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send("hello.")
});

app.get('api/apartments', (req, res) => {

});

app.get('api/cities', (req, res) => {
    //return cities from stored online apartments
});

app.get('api/removeApt', (req, res) => {

});

const port = process.env.PORT || 8082;

app.listen(port, (req, res) => { });

scraper.initScrapingCycle();
