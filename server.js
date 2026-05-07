const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

/*
 API ENDPOINT
*/
app.get("/api/notice", (req, res) => {
  res.json({
    message: "📢 Lecture postponed to Friday 2PM. Please check updated timetable."
  });
});

/*
 START SERVER
*/
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
