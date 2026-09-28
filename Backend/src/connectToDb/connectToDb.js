import mongoose from "mongoose";

const connectToDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/mern");
  console.log("Connected to db");
};

export default connectToDb;
