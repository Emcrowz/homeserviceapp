import express from "express";
import cors from "cors";
import { connectToDb, PORT } from "./mongodb";

import AuthRoutes from "./Routes/AuthRoutes";
import CategoriesRoutes from "./Routes/CategoriesRoutes";
import BusinessesRoutes from "./Routes/BusinessesRoutes";
import BookingsRoutes from "./Routes/BookingsRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", AuthRoutes);
app.use("/categories", CategoriesRoutes);
app.use("/businesses", BusinessesRoutes);
app.use("/bookings", BookingsRoutes);

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err.message);
  });
