import mongoose from "mongoose";

interface ICategory {
  name: string;
  bgColor: object;
  icon: object;
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
      default: "http://example.com/default-icon.png",
    },
  },
});

const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;
