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

// GET all goals && POST a goal
router.route("/").get(getGoals).post(setGoal);

// UPDATE a goal && DELETE a goal
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
