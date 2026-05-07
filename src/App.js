import React, { useEffect, useState } from "react";

function App() {
  const [notice, setNotice] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/notice")
      .then(res => res.json())
      .then(data => setNotice(data.message));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📢 Student Notice Board</h1>
      <p>{notice}</p>
    </div>
  );
}

export default App;
