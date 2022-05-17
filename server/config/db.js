
// db.js

const mongoose = require('mongoose');
const config = require('config');
//const log = require('../../errorLog.txt') //place holder for future logging system
var isDBConnected = false;


// connect to db
const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://adeera-dev:adeera-dev@cluster0.zbb0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            {
                useNewUrlParser: true
            }
        );
        isDBConnected = true;
        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
    }
};

//disconnect from db
const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
    } catch (err) {
        console.error(err.message)
    }
};

//apartment DB scheme
const apartmentScheme = new mongoose.Schema({
    post_id: {
        type: String,
        required: [true, "Post ID is missing, cannot register the post"]
    },
    text: {
        type: String,
        required: [true, "Post text is missing, cannot register the post"]
    },
    time: {
        type: Date,
        required: [true, "Post date is missing, cannot register the post"]
    },
    images: {
        type: [String]
    },
    images_description: {
        type: [String]
    },
    video: {
        type: String
    },
    comments: {
        type: Number,
    },
    post_url: {
        type: String,
        required: [true, "Post URL is missing, cannot register the post"]
    },
    user_id: {
        type: String
    },
    user_name: {
        type: String
    },
    group_name: {
        type: [{ name: String }]
    }
});

//create a new collection
const Apartment = mongoose.model("Apartment", apartmentScheme);


const insertUser = async (user) => {
    try {

        apartment.save().then(() => console.log("Save success"));

    } catch (error) {
        //catch and try to re-insert in case of non-fatal error.

    }
}

const insertApartment = async (apartment) => {
    try {
        // insert to DB

    } catch (error) {
        //catch and try to re-insert in case of non-fatal error.

    }
}

module.exports = {
    connectDB,
    disconnectDB,
    apartmentScheme,
    Apartment,
    insertApartment,
    insertUser
}
