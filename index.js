const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});

app.get("/attendances", (req, res) => {
  res.send("You are on the attendance route!")
});