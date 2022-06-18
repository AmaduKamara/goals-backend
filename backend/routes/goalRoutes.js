const express = require("express");

// Create router
const router = express.Router();

// GET all goals
router.get("/", (req, res) => {
  res.status(200).json({ message: "GET Goals" });
});

// POST a goal
router.post("/", (req, res) => {
  res.status(201).json({ message: "POST Goal" });
});

// UPDATE a goal
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `UPDATE a Goal ${req.params.id}` });
});

// DELETE a goal
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `DELETE a Goal ${req.params.id}` });
});

module.exports = router;
