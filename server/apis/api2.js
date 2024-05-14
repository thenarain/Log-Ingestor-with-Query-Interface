// apis/api2.js
const express = require("express");
const router = express.Router();
const logger = require("../config/logger");

router.get("/api2", (req, res) => {
  logger.label = { label: "log2.log" };
  logger.info("Inside API2");
  res.send("API2 response");
});

module.exports = router;
