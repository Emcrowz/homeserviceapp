const express = require("express");
const Booking = require("../Models/Booking");
const router = express.Router();

// == Booking router
// Get requests
router.get("/bookings/user/:email", async (req, res) => {
  try {
    const userBookings = await Booking.find({ userEmail: req.params.email });
    res.json(userBookings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching bookings for the user", error: err });
  }
});

// Post requests
router.post("/bookings", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating booking", error: err?.message ?? err });
  }
});

// Delete requests
router.delete("/bookings/:id", async (req, res) => {
  try {
    const bookingByIt = await Booking.findById(req.params.id);
    Booking.deleteOne(bookingByIt);
    res.status(204).send("Specified booking has been deleted.");
    console.log(bookingByIt);
  } catch (err) {
    res.status(404).send("Booking with specified ID not found.");
  }
});

module.exports = router;
