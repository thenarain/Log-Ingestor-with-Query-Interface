import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import LogSearch from "./LogSearch";
import LogResults from "./LogResults";

function App() {
  const [logs, setLogs] = useState([]);

  const searchLogs = async (filters) => {
    try {
      const response = await axios.post("/api/search", filters);
      setLogs(response.data);
    } catch (error) {
      console.error("Error searching logs:", error);
    }
  };

  return (
    <div>
      <h1>Log Search</h1>
      <LogSearch onSearch={searchLogs} />
      <LogResults logs={logs} />
    </div>
  );
}

export default App;
