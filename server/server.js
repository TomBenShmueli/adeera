// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
var request = require('request-promise');
const { spawn } = require('child_process');
// routes

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send("hello.")
});

const port = process.env.PORT || 8082;

app.listen(port, (req, res) => {


});

app.on('listening', function () {

});


async function getPosts() {

    // This variable contains the data
    // you want to send 
    var data = {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    var options = {
        method: 'POST',

        // http:flaskserverurl:port/route
        uri: 'http://127.0.0.1:5000/get_posts',
        body: data,

        // Automatically stringifies
        // the body to JSON 
        json: true
    };

    var sendrequest = await request(options)

        // The parsedBody contains the data
        // sent back from the Flask server 
        .then(function (parsedBody) {
            console.log(parsedBody);

            // You can do something with
            // returned data
            let result;
            result = parsedBody['result'];
            console.log("Sum of Array from Python: ", JSON.stringify(result, null, 4));
        })
        .catch(function (err) {
            console.log(err);
        });
}

getPosts();