import mongoose, { Types } from "mongoose";

interface IBooking {
  _id: Types.ObjectId;
  businessId: Types.ObjectId;
  userId: Types.ObjectId;
  userEmail: string;
  reservationTime: number[];
  status: "Cancelled" | "Pending" | "Confirmed";
  date: Date;
}

const bookingSchema = new mongoose.Schema<IBooking>(
  {
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
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
    reservationTime: {
      type: [Number],
      required: [true, "field is required. e.g. 2022-04-28"],
    },
    status: {
      type: String,
      default: "Pending",
      enum: {
        values: ["Cancelled", "Pending", "Confirmed"],
        message: "{VALUE} is not supported", // Custom message if an unsupported value is provided
      },
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const Booking = mongoose.model<IBooking>("Booking", bookingSchema);
export default Booking;
