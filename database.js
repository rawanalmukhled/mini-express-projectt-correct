const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to the Database");
  } catch (error) {
    console.error("Error trying to connect to the database:", error);
  }
};

module.exports = connectDB;
