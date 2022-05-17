const dbModule = require('./config/db');
const parser = require('./parser')
var cors = require('cors');
var request = require('request-promise');



async function getPosts() {

    // This variable contains the data
    // you want to send 
    var data = {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };

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

        // The parsedBody contains the data sent back from the Flask server 
        .then(function (parsedBody) {
            let result;
            result = parsedBody['result'];
            //parse results to apartments -->
            parser.parseApts(result);
            
        })
        .catch(function (err) {
            console.log(err);
        });
};

module.exports = {
    initScrapingCycle: function () {
        // Connect Database
        //dbModule.connectDB();
        console.log('init called...')
        getPosts();
        //dbModule.disconnectDB();
    }
};