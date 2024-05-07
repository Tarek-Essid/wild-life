// 1 Require express
const express = require("express");

// 2 Create instance
const app = express();

// 5 Require dotenv
require("dotenv").config();

// 7 middleware body
app.use(express.json());

//6 ConnectDB
const connectDB = require("./config/connectDB");
connectDB();

// 7 Routes
app.use("/api/product", require("./routes/product"));

// 3 Create PORT
const PORT = process.env.PORT;

// 4 Create server
app.listen(PORT, (error) => {
  error
    ? console.error(`Failed to connect to server ! ${error}`)
    : console.log(`Server is running at port ${PORT}. . .`);
});
