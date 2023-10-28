const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: { type: String, default: "default-image.jpg" },
});

module.exports = mongoose.model("Books", BookSchema);
