const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bgcolor: {
    hex: {
      type: String,
      default: "#FFFFFF",
    },
  },
  icon: {
    url: {
      type: String,
      default: "http://example.com/default-icon.png",
    },
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
// const categories = [
//   {
//     id: 1,
//     name: "Food",
//     bgcolor: { hex: "#f00" },
//     icon: { url: "http://example.com/icon1.png" },
//   },
//   {
//     id: 2,
//     name: "Retail",
//     bgcolor: { hex: "#0f0" },
//     icon: { url: "http://example.com/icon2.png" },
//   },
// ]; // Array to store categories
