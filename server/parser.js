const dbModule = require('./config/db')

module.exports = {
    parseApts: function (apartmentsJSON) {
        try {
            //extract parameters to new JSON
            apartmentsJSON.array.forEach(element => {
                console.log(element)
                // var jsonToDB = {
                //     post_id : element.
                // }
                dbModule.insertApartment(element);
            });
        } catch (err) {

        }
    }
};