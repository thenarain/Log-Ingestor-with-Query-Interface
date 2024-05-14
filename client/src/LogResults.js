import React from "react";
import moment from "moment";

function LogResults({ logs }) {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <p>Level: {log.level}</p>
            <p>Message: {log.log_string}</p>
            <p>
              Timestamp: {moment(log.timestamp).format("YYYY-MM-DD HH:mm:ss")}
            </p>
            <p>Source: {log.metadata.source}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LogResults;
