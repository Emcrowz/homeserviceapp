// console.log is kept for logging purposes.
const express = require("express");
const { connectToDb, PORT } = require("./mongodb");

const AuthRoutes = require("./Routes/AuthRoutes");
const UserRoutes = require("./Routes/UserRoutes");
const CategoriesRoutes = require("./Routes/UserRoutes");
const BusinessesRoutes = require("./Routes/UserRoutes");
const BookingsRoutes = require("./Routes/UserRoutes");

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
