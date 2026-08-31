import { College } from "../schema/model.js";

export const createCollege = async (req, res) => {
  try {
    const result = await College.create(req.body);
    res.status(201).json({
      success: true,
      message: "College created successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getCollege = async (req, res) => {
  try {
    const result = await College.find();
    res.status(200).json({
      success: true,
      message: "College read successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCollegeById = async (req, res) => {
  try {
    const result = await College.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ success: false, message: "College not found" });
    }
    res.status(200).json({ success: true, message: "College fetched successfully", result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCollegeController = async (req, res) => {
  try {
    const result = await College.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, 
    });
    if (!result) {
      return res.status(404).json({ success: false, message: "College not found" });
    }
    res.status(200).json({
      success: true,
      message: "College updated successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteCollege = async (req, res) => {
  try {
    const result = await College.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ success: false, message: "College not found" });
    }
    res.status(200).json({
      success: true,
      message: "College deleted successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};