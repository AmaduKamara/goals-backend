const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 5000;

// DB connection
connectDB();

// Init express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));

// Error Middleware
app.use(errorHandler);

// Run express server
app.listen(port, () => console.log(`Server started on port: ${port}`));
