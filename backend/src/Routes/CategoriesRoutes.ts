import express from "express";
import Category from "../Models/Category";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ order: 1 });
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCategory = await new Category(req.body).save();
    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(400).json({ message: "Error creating category", error: err });
  }
});

export default router;
