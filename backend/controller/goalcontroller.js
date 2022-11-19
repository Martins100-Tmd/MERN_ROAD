//@desc get goals
//@route GET /api/goals
const { json } = require("body-parser");
const e = require("express");
const asyncHandler = require("express-async-handler");
//@access Private
const Goal = require("../model/goalModel");
/***
 * getGoals
 *    asyncHandler - an error handler to take care of req or res errors
 *    find()[mongoose method()] - return all data in database
 *    Return: Array:[]
 */
const getGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.find();
  res.status(200).json(goal);
});

/***
 * setGoals:
 *    asyncHandler - an error handler to take care of req or res errors
 *    create(object prototype of the schema model)[mongoose method()] - creates a new object(data)
 *    #It takes only json object which I will look into for why??
 *    Return: returns the created data in the database with timestamps
 */
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(`please add a text field!! `);
  } else {
    const goal = await Goal.create({
      text: req.body.text,
    });
    res.status(200).json(goal);
  }
});
/***
 * updateGoals
 *    asyncHandler - an error handler to take care of req or res errors
 *    findById():[mongoose method()] - find a data in the database by it id
 *    findByIdAndUpdate():[mongoose method()] - finds a data in the database by it ID and
 *    updates it with a new data or update a specific field
 *    Return: returns new(updated) data
 */
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});
/***
 * deleteGoals
 *    asyncHandler - an error handler to take care of req or res errors
 *    findById()[mongoose method()] - find data in the database by it ID
 *    remove():[mongoose method()] - remove a data in the database
 */
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
