const Transaction = require('../models/Transaction');

exports.getRecentTransactions = async (req, res) => {
  try {
    const txns = await Transaction.find().sort({ date: -1 }).limit(10);
    res.json(txns);
  } catch (err) {
    res.status(500).json({ message: 'Error loading transactions', error: err.message });
  }
};
