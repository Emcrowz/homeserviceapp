import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const generateToken = (payload: { id: Types.ObjectId }) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT SECRET NOT DEFINED");
  }
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "90d" });
};
