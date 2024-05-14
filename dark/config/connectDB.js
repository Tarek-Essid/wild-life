// 1 Require mongoose
const mongoose = require("mongoose");

// 2 function connectDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected . . .");
  } catch (error) {
    console.log("Can not connect to database !", error);
  }
};

// 3 Exports connectDB
module.exports = connectDB;
