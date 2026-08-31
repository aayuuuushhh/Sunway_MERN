import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  dress: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default collegeSchema;