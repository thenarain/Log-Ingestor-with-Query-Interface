const express = require("express");
const app = require("./app");
const path = require("path");
const glob = require("glob");
const fs = require("fs");

app.use(express.json());

// Serve the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// API route for searching logs
app.post("/api/search", (req, res) => {
  const { level, message, source, timestamp } = req.body;

  const logFiles = glob.sync("logs/*.log");
  const results = [];

  logFiles.forEach((logFile) => {
    const logData = fs.readFileSync(logFile, "utf8");
    const logs = logData.split("\n").filter(Boolean);

    logs.forEach((log) => {
      const logObject = JSON.parse(log);

      const levelMatch = !level || logObject.level === level;
      const messageMatch = !message || logObject.log_string.includes(message);
      const sourceMatch = !source || logObject.metadata.source === source;
      const timestampMatch = !timestamp || logObject.timestamp === timestamp;

      if (levelMatch && messageMatch && sourceMatch && timestampMatch) {
        results.push(logObject);
      }
    });
  });

  res.json(results);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
