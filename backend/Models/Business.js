const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "Invalid email format",
    },
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;

// const businesses = [
//   {
//     id: 1,
//     name: "Business One",
//     about: "Description One",
//     address: "Address One",
//     category: "Food",
//     contactPerson: "Person One",
//     email: "email@example.com",
//     images: [{ url: "http://example.com/image1.png" }],
//   },
//   {
//     id: 2,
//     name: "Business Two",
//     about: "Description Two",
//     address: "Address Two",
//     category: "Retail",
//     contactPerson: "Person Two",
//     email: "email2@example.com",
//     images: [{ url: "http://example.com/image2.png" }],
//   },
// ];
