const User = require("../models/User");
const Booking = require("../models/Booking");
const Car = require("../models/Car");

exports.getDashboardStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const cars = await Car.countDocuments();
    const bookings = await Booking.countDocuments();

    res.json({
      totalUsers: users,
      totalCars: cars,
      totalBookings: bookings,
    });
  } catch (err) {
    res.status(500).json({ msg: "Error loading dashboard" });
  }
};
