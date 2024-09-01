import mongoose from "mongoose";

interface ICategory {
  name: string;
  bgColor: { hex: string };
  icon: { url: string };
  order: number;
}

const categorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  bgColor: {
    hex: {
      type: String,
      default: "#FFFFFF",
    },
  },
  icon: {
    url: {
      type: String,
      default: "FaBucket",
    },
  },
  order: { type: Number, required: true },
});

const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;
