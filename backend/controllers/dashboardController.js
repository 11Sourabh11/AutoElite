const Car = require("../models/Car");
const Transaction = require("../models/Transaction");

exports.getDashboardStats = async (req, res) => {
  try {
    const totalCars = await Car.countDocuments();
    const availableCars = await Car.countDocuments({ available: true });
    const totalSales = await Transaction.aggregate([
      { $match: { type: "Purchase" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    const activeRentals = await Transaction.countDocuments({ type: "Rental" });

    res.json({
      totalCars,
      availableCars,
      totalSales: totalSales[0]?.total || 0,
      activeRentals,
    });
  } catch (err) {
    res.status(500).json({ message: "Dashboard error", error: err.message });
  }
};
