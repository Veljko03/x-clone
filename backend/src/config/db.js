import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  if (!ENV.MONGO_URI) {
    console.error("MONGO_URI is not defined!");
    return; // ne izlazi sa process.exit() u serverless okruženju
  }

  try {
    await mongoose.connect(ENV.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB SUCCESSFULLY ✅");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Ne radi process.exit() u serverless, samo loguj grešku
  }
};
