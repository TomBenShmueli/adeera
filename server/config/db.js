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
    //console.log("trying to disconnect...");
    //mongoose.connection.close();
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
  number_of_rooms: {
    type: Number,
  },
  city: {
    type: String,
  },
});

//create a new collection
const Apartment = mongoose.model("Apartment", apartmentSchema);

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
  console.log("trying to connect...");
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

const DisconnectDB = async () => {
  try {
    console.log("trying to disconnect...");
    await mongoose.connection
      .close()
      .then(console.log("Mongo DB is disconnected."));
  } catch (error) {
    console.log(error);
  }
};

async function saveApartments(apartmentArray) {
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
      number_of_rooms: apartment.number_of_rooms,
      city: apartment.city,
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

async function getApartments() {
  ConnectDB();
  let apartments = await Apartment.find({}, function (err, docs) {
    if (!err) {
      return docs;
    } else {
      console.log(err);
    }
  })
    .clone()
    .catch(function (err) {
      console.log(err);
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
        return docs;
      } else {
        console.log(err);
      }
    }
  )
    .clone()
    .catch(function (err) {
      console.log(err);
    });
  DisconnectDB();

  return groupNames;
}

module.exports = {
  connectDB,
  disconnectDB,
  apartmentSchema,
  Apartment,
  dummyData,
  saveApartments,
  getApartments,
  getGroupName,
};
