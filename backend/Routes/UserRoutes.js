const express = require("express");
const User = require("../Models/User");
const AuthMiddleware = require("../Middlewares/AuthMiddleware");

const router = express.Router();

router.get("/", AuthMiddleware, async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (err) {
    console.log(err); // for 'logger' purposes
    res.status(500).json({ message: "Error fetching users", error: err });
  }
});

router.post("/users", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.json(deletedUser);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
