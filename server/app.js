const express = require("express");
const app = express();

// Import and mount APIs
const api1 = require("./apis/api1");
const api2 = require("./apis/api2");

app.use("/api1", api1);
app.use("/api2", api2);

module.exports = app;
