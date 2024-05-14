import React, { useState } from "react";

function LogSearch({ onSearch }) {
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleSearch = () => {
    const filters = {
      level: level || undefined,
      message: message || undefined,
      source: source || undefined,
      timestamp: timestamp || undefined,
    };
    onSearch(filters);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Timestamp"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default LogSearch;
