const express = require("express");
const {
  getRecentTransactions,
} = require("../controllers/transactionController");
const router = express.Router();

router.get("/recent", getRecentTransactions);

module.exports = router;
