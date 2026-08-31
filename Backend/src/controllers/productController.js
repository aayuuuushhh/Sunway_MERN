import expressAsyncHandler from "express-async-handler";
import { Product } from "../schema/model.js";

export const createProduct = expressAsyncHandler(async (req, res) => {
  const result = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product created successfully",
    result: result,
  });
});

export const readProduct = expressAsyncHandler(async (req, res) => {
  const result = await Product.find(); 
  res.status(200).json({
    success: true,
    message: "Products read successfully",
    result: result,
  });
});

export const readSpecificProduct = expressAsyncHandler(async (req, res) => {
  const result = await Product.findById(req.params.id); 
  if (!result) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.status(200).json({
    success: true,
    message: "Product read successfully",
    result: result,
  });
});

export const updateProductController = expressAsyncHandler(async (req, res) => {
  const result = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    result: result,
  });
});

export const deleteProduct = expressAsyncHandler(async (req, res) => {
  const result = await Product.findByIdAndDelete(req.params.id);
  if (!result) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
    result: result,
  });
});