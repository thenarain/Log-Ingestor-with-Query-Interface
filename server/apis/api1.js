// apis/api1.js
const express = require("express");
const router = express.Router();
const logger = require("../config/logger");

router.get("/api1", (req, res) => {
  logger.info("Inside API1");
  res.send("API1 response");
});

module.exports = router;
