// console.log is kept for logging purposes.
import express from "express";
import { connectToDb, PORT } from "./mongodb";

import AuthRoutes from "./Routes/AuthRoutes";
import UserRoutes from "./Routes/UserRoutes";
import CategoriesRoutes from "./Routes/UserRoutes";
import BusinessesRoutes from "./Routes/UserRoutes";
import BookingsRoutes from "./Routes/UserRoutes";

const app = express();
app.use(express.json()); // Middleware to parse JSON data
app.use("/auth", AuthRoutes);
app.use("/users", UserRoutes);
app.use("/categories", CategoriesRoutes);
app.use("/businesses", BusinessesRoutes);
app.use("/bookings", BookingsRoutes);

// == Server (MongoDB) listening
connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err.message);
  });
