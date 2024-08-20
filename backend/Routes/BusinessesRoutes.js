const express = require("express");
const Business = require("../Models/Business");
const router = express.Router();

// == Business router
// Get requests
router.get("/businesses", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
    console.log(businesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses", error: err });
  }

  res.status(200).json(businesses);
});

router.get("/businesses/category/:category", async (req, res) => {
  try {
    const filteredBusinesses = await Business.find({
      category: req.params.category.toLowerCase(),
    });
    res.json(filteredBusinesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses by category", error: err });
  }
});

router.get("/businesses/:id", async (req, res) => {
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

router.get("/businesses/:businessId/bookings/date/:date", async (req, res) => {
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
router.post("/businesses", async (req, res) => {
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
router.put("/businesses/:id", (req, res) => {
  const businessById = req.params.id;
  const { name, about, address, category, contactPerson, email, images } = req.body;
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

  const businessIndex = businesses.findIndex((business) => business.id === businessId);

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

module.exports = router;
