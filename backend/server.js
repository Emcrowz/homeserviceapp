const express = require("express");
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

// == Server listening
app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
