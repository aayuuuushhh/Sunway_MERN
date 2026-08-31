import { Router } from "express";
import { Product } from "../schema/model.js";
import { deleteProduct, updateProductController } from "../controllers/productController.js";

const productRouter = Router();

export const createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).json({
      success: true,
      message: "Product read successfully",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
    try {
        const result = await Product.findById(req.params.id);
        if (!result) return res.status(404).json({ success: false, message: "Product not found" });
        res.status(200).json({ success: true, message: "Product fetched successfully", result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

productRouter.route("/:id").get(getProductById).patch(updateProductController).delete(deleteProduct);


productRouter.route("/").post(createProduct).get(getProduct);


export default productRouter;