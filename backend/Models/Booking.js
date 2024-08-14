const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, // Custom error message for required field
  },
  date: {
    type: Date,
    required: [true, "field is required. e.g. 2022-04-28"], // Ensuring date is provided
  },
  time: {
    type: String,
    required: [true, "field is required. e.g. 14:00"], // Time must be provided
  },
  userEmail: {
    type: String,
    required: [true, "field is required."], // Email is necessary for contact
    validate: {
      validator: function (email) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: (props) => `${props.value} is not a valid email!`, // Custom message for invalid email
    },
  },
  userName: {
    type: String,
    required: true, // Name is necessary
  },
  status: {
    type: String,
    required: [true, "Booking status is required."], // Status must be provided
    enum: {
      values: ["confirmed", "pending", "cancelled"],
      message: "{VALUE} is not supported", // Custom message if an unsupported value is provided
    },
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
