// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "GET Goals" });
};

// @desc   Create goal
// @route  POST /api/goals
// @access Private
const setGoal = (req, res) => {
  res.status(201).json({ message: "POST Goal" });
};

// @desc   Update a goal
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `UPDATE a Goal ${req.params.id}` });
};

// @desc   Delete goal
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `DELETE a Goal ${req.params.id}` });
};



module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
