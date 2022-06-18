const express = require("express");

// Controllers
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Create router
const router = express.Router();

// GET all goals
router.get("/", getGoals);

// POST a goal
router.post("/", setGoal);

// UPDATE a goal
router.put("/:id", updateGoal);

// DELETE a goal
router.delete("/:id", deleteGoal);

module.exports = router;
