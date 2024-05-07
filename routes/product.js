// 1 Require
const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// 2 Routes
// test route
router.get("/test", (req, res) => {
  res.send("hello world");
});

// Add product
router.post("/add", async (req, res) => {
  try {
    const {title, description, price} = req.body;
    const newProduct = new Product({title, description, price});
    await newProduct.save();
    res.status(200).send({msg: "Product added successfully . . ."});
  } catch (error) {
    res.status(400).send({msg: "Product can not be added !", error});
  }
});

// Get all product
router.get("/all", async (req, res) => {
  try {
    const listProducts = await Product.find();
    res.status(200).send({msg: "List products . . .", listProducts});
  } catch (error) {
    res.status(400).send({msg: "Can not get list products !", error});
  }
});

// Get one product
router.get("/:id", async (req, res) => {
  try {
    const productToGet = await Product.findOne({_id: req.params.id});
    res.status(200).send({msg: "One product . . .", productToGet});
  } catch (error) {
    res.status(400).send({msg: "Can not get the product !", error});
  }
});

// Delete product
router.delete("/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    await Product.findOneAndDelete({_id});
    res.status(200).send({msg: "Product deleted successfully . . ."});
  } catch (error) {
    res.status(400).send({msg: "Can not delete product !", error});
  }
});

// Edit product
router.put("/:_id", async (req, res) => {
  try {
    const {_id} = req.params;
    const result = await Product.updateOne({_id}, {$set: {...req.body}});
    res.status(200).send({msg: "Product updated . . ."});
  } catch (error) {
    res.status(400).send({msg: "Product can not update !", error});
  }
});

// Exports
module.exports = router;
