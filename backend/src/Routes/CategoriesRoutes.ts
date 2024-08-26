import express from "express";
import Category from "../Models/Category";
const router = express.Router();

// == Categories router
// Get requests
router.get("/", async (req, res) => {
  try {
    return res.status(200).json(await Category.find());
  } catch (err) {
    return res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

// Post requests
router.post("/", async (req, res) => {
  try {
    return res.status(201).json(await new Category(req.body).save());
  } catch (err) {
    return res.status(400).json({ message: "Error creating category", error: err });
  }
});

export default router;
