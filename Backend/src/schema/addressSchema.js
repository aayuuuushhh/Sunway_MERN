import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    municipality: {
      type: String,
      required: [true, "Municipality is required"],
      trim: true,
    },
    district: {
      type: String,
      required: [true, "District is required"],
      trim: true,
    },
    zone: {
      type: String,
      required: [true, "Zone is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export default addressSchema;