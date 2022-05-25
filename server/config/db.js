// db.js

const mongoose = require("mongoose");
const config = require("config");
//const log = require('../../errorLog.txt') //place holder for future logging system
var isDBConnected = false;

// connect to db
const connectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://adeera-dev:adeera-dev@cluster0.zbb0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );

    isDBConnected = true;
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
  }
};

//disconnect from db
const disconnectDB = () => {
  try {
    console.log("trying to disconnect...");
    mongoose.connection.close();
  } catch (err) {
    console.error(err.message);
  }
};

//apartment DB scheme
const apartmentSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: [true, "Post ID is missing, cannot register the post"],
  },
  text: {
    type: String,
    required: [true, "Post text is missing, cannot register the post"],
  },
  post_date: {
    type: Date,
  },
  images: {
    type: [String],
  },
  images_description: {
    type: [String],
  },
  video: {
    type: String,
  },
  comments: {
    type: Number,
  },
  post_url: {
    type: String,
    required: [true, "Post URL is missing, cannot register the post"],
  },
  user_id: {
    type: String,
  },
  user_name: {
    type: String,
  },
  group_name: {
    type: String,
  },
  listing_price: {
    type: String,
  },
});

//create a new collection
const Apartment = mongoose.model("Apartment", apartmentSchema);

const userSchema = new mongoose.Schema({});

const dummyData = async () => {
  connectDB();
  const apartment = new Apartment({
    post_id: "1234",
    text: "text",
    post_url: "text",
    post_date: Date.now(),
  });
  apartment.save().then(() => console.log("Hello World!"));
};

const ConnectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://adeera-dev:adeera-dev@cluster0.zbb0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    )
    .then(console.log("Mongo DB is connected."));
  return mongoose;
};

const insertUser = async (user) => {
  try {
    apartment.save().then(() => console.log("Save success"));
  } catch (error) {
    //catch and try to re-insert in case of non-fatal error.
  }
};

async function saveApartments(apartmentArray) {
  console.log("trying to connect...");
  ConnectDB();
  const Apartment = mongoose.model("Apartment", apartmentSchema);

  for (const apartment of apartmentArray) {
    let currentApt = new Apartment({
      post_id: apartment.post_id,
      text: apartment.text,
      post_date: apartment.time,
      images: apartment.images,
      images_description: apartment.images_description,
      video: apartment.video,
      comments: apartment.comments,
      post_url: apartment.post_url,
      user_name: apartment.user_name,
      user_id: apartment.user_id,
      group_name: apartment.group_name,
      listing_price: apartment.listing_price,
      is_live: true,
    });
    try {
      await currentApt.save().then("apt " + currentApt.post_id + "saved.");
    } catch (error) {
      console.error(error);
    }
  }

  DisconnectDB();
}

function DisconnectDB() {
  console.log("trying to disconnect...");
  mongoose.connection.close();
  console.log("Mongo DB is disconnected.");
}

async function getApartments() {
  ConnectDB();
  let apartments = await Apartment.find({}, function (err, docs) {
    if (!err) {
      console.log(docs);
      disconnectDB();
      return docs;
    } else {
      throw err;
    }
  });
  DisconnectDB();
  return apartments;
}

async function getGroupName() {
  ConnectDB();
  let groupNames = await Apartment.find(
    {},
    { group_name: 1, _id: 0 },
    function (err, docs) {
      if (!err) {
        console.log(docs);
        disconnectDB();
        return docs;
      } else {
        throw err;
      }
    }
  );
  DisconnectDB();
}

module.exports = {
  connectDB,
  disconnectDB,
  apartmentSchema,
  Apartment,
  insertUser,
  dummyData,
  saveApartments,
  getApartments,
  getGroupName,
};
