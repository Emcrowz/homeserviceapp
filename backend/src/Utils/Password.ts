import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const generateToken = (payload: { id: Types.ObjectId }) => {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "90d" });
};
