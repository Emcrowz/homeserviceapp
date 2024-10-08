import express from "express";
import User from "../Models/User";
import { generateToken } from "../Utils/Password";
import { RegisterLimiter } from "../Middlewares/RegisterLimiter";

const router = express.Router();

router.post("/register", RegisterLimiter, async (req, res) => {
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
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password." });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.isCorrectPassword(password))) {
      return res.status(401).json({ message: "Incorrect email or password." });
    }
    const token = generateToken({ id: user._id });
    const { password: _, ...userWithoutPassword } = user.toObject();

    return res.status(200).json({ status: "success", token, user: userWithoutPassword });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ message: "Error attempting to log in.", error: (err as Error).message });
  }
});

router.post("/changeDetails", async (req, res) => {
  try {
    const { _id, name, email } = req.body;

    if (!email || !name) {
      return res.status(400).json({ message: "Please provide name or email." });
    }

    const newUserDetails = { name: name, email: email };
    const user = await User.findById(_id).updateOne({ $set: newUserDetails });

    if (!user) {
      return res.status(401).json({ message: "User does not exist." });
    }

    return res.status(200).json({ status: "success", message: "User details changed" });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ message: "Error attempting to change user details.", error: (err as Error).message });
  }
});

export default router;
