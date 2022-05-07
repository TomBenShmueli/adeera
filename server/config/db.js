
// db.js

const mongoose = require('mongoose');
const config = require('config');
//const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://adeera-dev:adeera-dev@cluster0.zbb0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;