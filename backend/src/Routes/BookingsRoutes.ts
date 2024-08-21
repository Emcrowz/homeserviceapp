import express from "express";
import Booking from "../Models/Booking";
const router = express.Router();

// == Booking router
// Get requests
router.get("/", async (req, res) => {
  try {
    return res.status(200).json(await Booking.find());
  } catch (err) {
    return res.status(500).json({ message: "Error fetching booking records.", error: err });
  }
});

router.get("/user/:email", async (req, res) => {
  try {
    return res.json(await Booking.find({ userEmail: req.params.email }));
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

// Delete requests
// Recheck and fix in the future.
// Problem on line 33.
//
// router.delete("/:id", async (req, res) => {
//   try {
//     const bookingById = await Booking.findById(req.params.id);
//     Booking.deleteOne(bookingById);
//     res.status(204).send("Specified booking has been deleted.");
//     console.log(bookingById);
//   } catch (err) {
//     res.status(404).send("Booking with specified ID not found.");
//   }
// });

export default router;
