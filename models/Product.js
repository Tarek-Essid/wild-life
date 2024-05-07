// 1 Require mongoose
const mongoose = require("mongoose");

// 2 Create Schema
const schema = mongoose.Schema;

const productSchema = new schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number},
});

// 3 Exports
module.exports = Product = mongoose.model("product", productSchema);
