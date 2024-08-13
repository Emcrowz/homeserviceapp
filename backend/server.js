const express = require("express");
const { connectToDb, PORT } = require("./mongodb");

// Models
const User = require("./Models/User");
const Booking = require("./Models/Booking");
const Business = require("./Models/Business");
const Category = require("./Models/Category");

const app = express();
app.use(express.json()); // Middleware to parse JSON data

const categories = [
  {
    id: 1,
    name: "Food",
    bgcolor: { hex: "#f00" },
    icon: { url: "http://example.com/icon1.png" },
  },
  {
    id: 2,
    name: "Retail",
    bgcolor: { hex: "#0f0" },
    icon: { url: "http://example.com/icon2.png" },
  },
]; // Array to store categories
const businesses = [
  {
    id: 1,
    name: "Business One",
    about: "Description One",
    address: "Address One",
    category: "Food",
    contactPerson: "Person One",
    email: "email@example.com",
    images: [{ url: "http://example.com/image1.png" }],
  },
  {
    id: 2,
    name: "Business Two",
    about: "Description Two",
    address: "Address Two",
    category: "Retail",
    contactPerson: "Person Two",
    email: "email2@example.com",
    images: [{ url: "http://example.com/image2.png" }],
  },
]; // Array to store businesses
const bookings = []; // Array to store bookings

app.get("/", (req, res) => {
  res.status(200).send("NodeJS server is running.");
});

// == Categories router
// Get requests
app.get("/categories", (req, res) => {
  res.status(200).json(categories);
});

// Post requests
app.post("/categories", (req, res) => {
  const newCatogry = { id: categories.length + 1, ...req.body };
  categories.push(newCatogry);
  res.status(201).json(newCatogry);
});

// == Business router
// Get requests
app.get("/businesses", (req, res) => {
  res.status(200).json(businesses);
});

app.get("/businesses/category/:category", (req, res) => {
  const filteredBusinesses = businesses.filter(
    (business) =>
      business.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.status(200).json(filteredBusinesses);
});

app.get("/businesses/:id", (req, res) => {
  const businessId = req.params.id;
  const business = businesses.find((business) => business.id == businessId);

  if (business) {
    res.status(200).json(business);
  } else {
    res.status(404).send("Business not found.");
  }
});

app.get("/businesses/:businessId/bookings/date/:date", (req, res) => {
  const slots = bookings.filter(
    (business) =>
      business.id === req.params.id && business.date === req.params.date
  );
  res.status(200).json(slots);
});

// Post requests
app.post("/businesses", (req, res) => {
  const newBusiness = { id: businesses.length + 1, ...req.body };
  categories.push(newBusiness);
  res.status(201).json(newBusiness);
});

// Put requests
app.put("/businesses/:id", (req, res) => {
  const businessId = req.params.id;
  const { name, category, address, city, telephone, email, description } =
    req.body;
  const businessIndex = businesses.findIndex(
    (business) => business.id === businessId
  );

  if (businessIndex !== -1) {
    businesses[businessIndex] = {
      id: businessId,
      name,
      category,
      address,
      city,
      telephone,
      email,
      description,
    };
  } else {
    res.status(404).send("Business not found.");
  }
});

// == Booking router
// Get requests
app.get("/bookings/user/:email", (req, res) => {
  const userEmail = req.params.email;
  const userBookings = bookings.filter(
    (booking) => booking.userEmail === userEmail
  );
  res.status(200).json(userBookings);
});

// Post requests
app.post("/bookings", (req, res) => {
  const { businessId, date, time, userEmail, userName } = req.body;
  const newBooking = {
    id: data.bookings.length + 1,
    businessId,
    date,
    time,
    userEmail,
    userName,
    status: "Booked",
  };

  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

// Delete requests
app.delete("/bookings/:id", (req, res) => {
  const bookingId = req.params.id;
  const bookingToDelete = bookings.findIndex(
    (booking) => booking.id === bookingId
  );
  if (bookingToDelete !== -1) {
    bookings.splice(bookingToDelete, 1);
    res.status(204).send("Specified booking has been deleted.");
  } else {
    res.status(404).send("Booking with specified ID not found.");
  }
});

// MongoDB
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (err) {
    console.log(err); // for 'logger' purposes
    res.status(500).json({ message: "Error fetching users", error: err });
  }
});

app.post("/users", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.json(deletedUser);
  } catch (err) {
    res.status(404).json(err);
  }
});

// == Server listening
// app.listen(3001, () => {
//   console.log("Local Server listening on port 3001.");
// });

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err.message);
  });
