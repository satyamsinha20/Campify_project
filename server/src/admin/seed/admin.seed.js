import dotenv from "dotenv";
import connectDB from "../../config/db.js";
import Admin from "../models/admin.model.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const existing = await Admin.findOne({
      email: "admin@gmail.com",
    });

    if (existing) {
      console.log("Admin already exists");
      process.exit();
    }

    await Admin.create({
      email: "admin@gmail.com",
      password: "123456",
    });

    console.log("Admin seeded successfully ✅");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();