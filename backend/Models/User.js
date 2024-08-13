// Schema for User. An Example to keep for reference.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
