const jwt = require("jsonwebtoken");

const expireIn = "90d";

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expireIn });
  return token;
};

module.exports = { generateToken };
