const express = require("express");
const User = require("../Models/User");
const { generateToken } = require("../Utils/Password");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error registering new user. " });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.isCorrectPassword(password))) {
    return res.status(401).json({ message: "Incorrect email or password." });
  }

  const token = generateToken({ id: user._id });
  return res.status(200).json({ token, user });
});

module.exports = router;
