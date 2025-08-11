const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  customer: String,
  car: String,
  type: String, // Purchase or Rental
  amount: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", transactionSchema);
