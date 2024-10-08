import express from "express";
import Business from "../Models/Business";
import Booking from "../Models/Booking";
import { AuthMiddleware } from "../Middlewares/AuthMiddleware";
import Category from "../Models/Category";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    return res.status(200).json(await Business.find());
  } catch (err) {
    return res.status(500).json({ message: "Error fetching businesses", error: err });
  }
});
router.get("/featured", async (req, res) => {
  try {
    const featuredBusinesses = await Business.find({ featured: true });

    return res.status(200).json(featuredBusinesses);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching featured businesses", error: err });
  }
});
router.get("/services/:category", async (req, res) => {
  try {
    return res.status(200).json(
      await Business.find({
        category: req.params.category.toLowerCase(),
      }),
    );
  } catch (err) {
    return res.status(500).json({ message: "Error fetching businesses by category", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (business) {
      return res.status(200).json(business);
    } else {
      return res.status(404).send("Business not found");
    }
  } catch (err) {
    return res.status(500).json({ message: "Error fetching business", error: err });
  }
});

router.get("/:id/bookings/date/:date", async (req, res) => {
  try {
    return res.status(200).json(
      await Booking.find({
        businessId: req.params.id,
        date: new Date(req.params.date),
      }),
    );
  } catch (err) {
    return res.status(500).json({
      message: "Error fetching bookings for the specified date and business",
      error: err,
    });
  }
});

router.post("/", AuthMiddleware, async (req, res) => {
  const business = req.body;

  try {
    const categoryExists = await Category.findOne({ name: business.category });
    if (!categoryExists) {
      return res.status(400).json({
        message: "Failed to add business: specified category does not exist.",
      });
    }

    return res.status(201).json(await new Business(business).save());
  } catch (err) {
    return res.status(500).json({
      message: "Server error while adding business.",
      error: (err as Error).message,
    });
  }
});

export default router;
