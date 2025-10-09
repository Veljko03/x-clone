import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URL);
    console.log("Connected to db");
  } catch (error) {
    console.log("Error connecting to mongoDB");

    process.exit(1);
  }
};
