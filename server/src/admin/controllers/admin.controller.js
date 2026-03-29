import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../../utils/generateToken.js";

// LOGIN
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(admin._id);

    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PROTECTED PROFILE
export const getAdminProfile = async (req, res) => {
  res.status(200).json({
    message: "Protected data access granted ✅",
    admin: req.admin,
  });
};