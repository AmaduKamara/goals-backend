const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 5000;

// Init express app
const app = express();

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));

// Run express server
app.listen(port, () => console.log(`Server started on port: ${port}`));
