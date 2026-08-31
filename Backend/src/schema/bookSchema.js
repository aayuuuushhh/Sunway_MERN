import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: Number,
  stock: {
    type: Number,
    default: 0,
  },
  publication: {
    type: String,
  },
}, { timestamps: true });

export default bookSchema;