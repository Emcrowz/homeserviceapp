const express = require("express");
const Category = require("../Models/Category");
const router = express.Router();

// == Categories router
// Get requests
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
    console.log(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

// Post requests
router.post("/categories", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: "Error creating category", error: err });
  }
});

module.exports = router;
