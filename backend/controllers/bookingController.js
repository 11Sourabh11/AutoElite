const Booking = require("../models/Booking");

// Create a new car booking
exports.createBooking = async (req, res) => {
  try {
    const { carId } = req.body;

    const booking = await Booking.create({
      userId: req.user.id,
      carId,
    });

    res.status(201).json({ msg: "Car booked successfully", booking });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ msg: "Booking failed", error: err.message });
  }
};

// Get bookings for the logged-in user
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate(
      "carId"
    );
    res.status(200).json(bookings);
  } catch (err) {
    console.error("User booking fetch error:", err);
    res
      .status(500)
      .json({ msg: "Error fetching user bookings", error: err.message });
  }
};

// Get all bookings (admin only)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("carId")
      .populate("userId", "name email"); // Fetch user info if needed

    res.status(200).json(bookings);
  } catch (err) {
    console.error("Admin booking fetch error:", err);
    res
      .status(500)
      .json({ msg: "Error fetching all bookings", error: err.message });
  }
};
