import mongoose from "mongoose";

const connectToDb = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is missing. Copy .env.example to .env and fill it in.");
  }
  await mongoose.connect(uri);
  console.log("Connected to Db");
};

export default connectToDb
