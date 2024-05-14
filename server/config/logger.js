// config/logger.js
const winston = require("winston");
const { DailyRotateFile } = require("winston-daily-rotate-file");
const path = require("path");
const { combine, timestamp, label, printf } = winston.format;

const logDirectory = path.join(__dirname, "../logs");

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `{"level":"${level}","log_string":"${message}","timestamp":"${timestamp}","metadata":{"source":"${label}"}}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(
    label({ label: "log1.log" }), // Default log file
    timestamp(),
    logFormat
  ),
  transports: [
    new winston.transports.DailyRotateFile({
      filename: "log1.log",
      dirname: logDirectory,
      maxFiles: "14d",
    }),
  ],
});

module.exports = logger;
