import { Address } from "../schema/model.js";

export const createAddress = async (req, res) => {
  try {
    const result = await Address.create(req.body);
    res.status(201).json({
      success: true,
      message: "Address created successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAddresses = async (req, res) => {
  try {
    const result = await Address.find();
    res.status(200).json({
      success: true,
      message: "Addresses fetched successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAddressById = async (req, res) => {
  try {
    const result = await Address.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }
    res.status(200).json({ success: true, message: "Address fetched successfully", result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateAddressController = async (req, res) => {
  try {
    const result = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }
    res.status(200).json({
      success: true,
      message: "Address updated successfully",
      result,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const result = await Address.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }
    res.status(200).json({
      success: true,
      message: "Address deleted successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};