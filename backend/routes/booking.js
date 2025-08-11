const express = require("express");
const {
  createBooking,
  getUserBookings,
  getAllBookings,
} = require("../controllers/bookingController");

const { verifyToken, verifyAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", verifyToken, createBooking);
router.get("/my", verifyToken, getUserBookings);
router.get("/all", verifyAdmin, getAllBookings);

module.exports = router;
