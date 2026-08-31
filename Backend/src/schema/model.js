import { model } from "mongoose";
import productSchema from "./productSchema.js";
import adminSchema from "./adminSchema.js";
import bookSchema from "./bookSchema.js";
import collegeSchema from "./collegeSchema.js";
import addressSchema from "./addressSchema.js";

export const Product = model("products", productSchema);
export const Admin = model("admins", adminSchema);
export const Book = model("book", bookSchema);
export const College = model("college", collegeSchema);
export const Address = model("address", addressSchema);