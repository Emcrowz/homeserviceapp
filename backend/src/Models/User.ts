import mongoose, { Types } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends mongoose.Document {
  _id: Types.ObjectId;
  name: string;
  age?: number;
  email: string;
  password: string;
  isCorrectPassword: (password: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre<IUser>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 2);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password: string) {
  const bcryptCompare = await bcrypt.compare(password, this.password);
  return bcryptCompare;
};

const User = mongoose.model<IUser>("User", userSchema);
export default User;
