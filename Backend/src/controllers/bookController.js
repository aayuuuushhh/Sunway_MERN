import { Book } from "../schema/model.js";

export const createBook = async (req, res) => {
  try {
    const result = await Book.create(req.body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const result = await Book.find();
    res.status(200).json({
      success: true,
      message: "Books read successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const result = await Book.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ success: false, message: "Book not found" });
    }
    res.status(200).json({ success: true, message: "Book fetched successfully", result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateBookController = async (req, res) => {
  try {
    const result = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};