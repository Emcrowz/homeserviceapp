import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./Models/User";
dotenv.config();

export const PORT = process.env.PORT ?? 3005;

export const connectToDb = async () => {
  try {
    const url = process.env.MONGO_URI;

    if (!url) {
      console.error("MONGO_URI is not defined in enviromnent");
      process.exit(1);
    } else {
      await mongoose.connect(url, { dbName: "homeserviceapp" });
      console.log("Connected to mongo DB with mongoose.");
    }
  } catch (err) {
    console.log("Could not connect to mongoDB with mongoose.", (err as Error).message);
    process.exit(1);
  }
};
