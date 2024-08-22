import express from "express";
import User from "../Models/User";
import AuthMiddleware from "../Middlewares/AuthMiddleware";

const router = express.Router();

router.get("/", AuthMiddleware, async (req, res) => {
  try {
    return res.status(200).json(await User.find());
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  try {
    return res.status(201).json(await newUser.save());
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    return res.status(201).json(updatedUser);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// To do/fix later.
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);
//     if (!deletedUser) {
//       return res.status(404).send("User not found");
//     }
//     User.deleteOne(deletedUser);
//     return res.status(200).json(deletedUser);
//   } catch (err) {
//     return res.status(404).json(err);
//   }
// });

export default router;
