import { Admin } from "../schema/model.js";
import { sendEmail } from "../utils/sendMail.js";

export const createAdmin = async (req, res) => {
  try {
    const result = await Admin.create(req.body);
    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

await sendEmail({
from: 'Unique <aayushshahnirala@gmail.com>',
  to: ["abc@gmail.com", "manisha@sunway.edu.np"],
  subject: "My first system email",
  html: "<h1>Hello world</h1>",
});

export const getAdmin = async (req, res) => {
  try {
    const result = await Admin.find().select("-password"); 
    res.status(200).json({
      success: true,
      message: "Admins retrieved successfully",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get specific admin by ID
export const getAdminById = async (req, res) => {
  try {
    const result = await Admin.findById(req.params.id).select("-password");
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Admin fetched successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const result = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admin updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const result = await Admin.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admin deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};