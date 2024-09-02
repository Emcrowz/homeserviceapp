import mongoose from "mongoose";

interface IBusiness {
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  imageUrls: string[];
  featured: boolean;
}

const businessSchema = new mongoose.Schema<IBusiness>({
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
  imageUrls: {
    type: [String],
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

const Business = mongoose.model<IBusiness>("Business", businessSchema);
export default Business;
