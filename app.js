const express = require("express");
const connectDB = require("./database");
require("dotenv").config();
const BookRoutes = require("./api/books/router");
const app = express();
app.use(express.json());
app.use("/api", BookRoutes);
connectDB();

app.listen(8000, () => {
  try {
    console.log("Connected to DB on port 8000");
  } catch (error) {
    console.log("Cant connect to DB" + { msg: error });
  }
});
