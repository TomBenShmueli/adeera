const { type } = require('express/lib/response');
const dbModule = require('./config/db')

module.exports = {
    parseApts: function (apartmentsResult) {        
        try {
            dbModule.dummyData();
            
        } catch (err) {
            console.log(err)
        }
    }
};
