import express from "express";
import Booking from "../Models/Booking";
const router = express.Router();

// Get requests
router.get("/", async (req, res) => {
  try {
    return res.status(200).json(await Booking.find());
  } catch (err) {
    return res.status(500).json({ message: "Error fetching booking records.", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    return res.json(await Booking.find({ userId: req.params.id }));
  } catch (err) {
    return res.status(500).json({ message: "Error fetching bookings for the user", error: err });
  }
});

// Post requests
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    return res.status(201).json(await newBooking.save());
  } catch (err) {
    return res.status(400).json({ message: "Error creating booking", error: err });
  }
});

export default router;
