const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "homeserviceapp" });
    console.log("Connected to mongo DB with mongoose.");
  } catch (err) {
    console.log("Could not connect to mongoDB with mongoose.");
    process.exit(1);
  }
};

module.exports = { connectToDb, PORT };
