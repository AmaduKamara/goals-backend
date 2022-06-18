const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 5000;

// Init express app
const app = express();

// Routes
app.get("/api/goals", (req, res) => {
  res.status(200).json({ message: "GET Goals" });
});

// Run express server
app.listen(port, () => console.log(`Server started on port: ${port}`));
