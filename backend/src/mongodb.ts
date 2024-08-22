import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT ?? 3005;

export const connectToDb = async () => {
  try {
    const url = process.env.MONGO_URI;

    if (url === undefined) return;
    else {
      await mongoose.connect(url, { dbName: "homeserviceapp" });
      console.log("Connected to mongo DB with mongoose.");
    }
  } catch (err) {
    console.log("Could not connect to mongoDB with mongoose.");
    process.exit(1);
  }
};
