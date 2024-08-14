// console.log is kept for logging purposes.
const express = require("express");
const { connectToDb, PORT } = require("./mongodb");

// Models
const User = require("./Models/User");
const Booking = require("./Models/Booking");
const Business = require("./Models/Business");
const Category = require("./Models/Category");

const app = express();
app.use(express.json()); // Middleware to parse JSON data

// == Categories router
// Get requests
app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
    console.log(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

// Post requests
app.post("/categories", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: "Error creating category", error: err });
  }
});

// == Business router
// Get requests
app.get("/businesses", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
    console.log(businesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses", error: err });
  }

  res.status(200).json(businesses);
});

app.get("/businesses/category/:category", async (req, res) => {
  try {
    const filteredBusinesses = await Business.find({
      category: req.params.category.toLowerCase(),
    });
    res.json(filteredBusinesses);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching businesses by category", error: err });
  }
});

app.get("/businesses/:id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (business) {
      res.json(business);
    } else {
      res.status(404).send("Business not found");
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching business", error: err });
  }
});

app.get("/businesses/:businessId/bookings/date/:date", async (req, res) => {
  try {
    const slots = await Booking.find({
      businessId: req.params.businessId,
      date: new Date(req.params.date),
    });
    res.json(slots);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching bookings for the specified date and business",
      error: err,
    });
  }
});

// Post requests
app.post("/businesses", async (req, res) => {
  const business = req.body;

  try {
    const categoryExists = await Category.findOne({ name: business.category });
    if (!categoryExists) {
      return res.status(400).json({
        message: "Failed to add business: specified category does not exist.",
      });
    }

    const newBusiness = new Business(business);

    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (err) {
    res.status(500).json({
      message: "Server error while adding business.",
      error: err.message,
    });
  }
});

// Put requests
app.put("/businesses/:id", (req, res) => {
  const businessById = req.params.id;
  const { name, about, address, category, contactPerson, email, images } =
    req.body;
  try {
    const business = Business.findById(businessById);
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    } else {
      business.updateOne({
        name,
        about,
        address,
        category,
        contactPerson,
        email,
        images,
      });
      res.status(200).json({ message: "Business updated successfully" });
    }
  } catch (err) {
    res.status(404).json({ message: "Business not found", error: err });
  }

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
  }
});

// == Booking router
// Get requests
app.get("/bookings/user/:email", async (req, res) => {
  try {
    const userBookings = await Booking.find({ userEmail: req.params.email });
    res.json(userBookings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching bookings for the user", error: err });
  }
});

// Post requests
app.post("/bookings", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating booking", error: err?.message ?? err });
  }
});

// Delete requests
app.delete("/bookings/:id", async (req, res) => {
  try {
    const bookingByIt = await Booking.findById(req.params.id);
    Booking.deleteOne(bookingByIt);
    res.status(204).send("Specified booking has been deleted.");
    console.log(bookingByIt);
  } catch (err) {
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
connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err.message);
  });
