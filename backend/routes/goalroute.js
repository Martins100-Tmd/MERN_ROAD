const express = require("express");
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controller/goalcontroller");
const router = express.Router();
//or for get abd psot request you can do
//router.route.('/').get(getgGoals).post(setGoals);
router.get("/", getGoals);
router.post("/", setGoals);

//and do this for update and delete since they require id
//router.route.('/:id').put(updateGoals).delete(deleteGoals);
router.put("/:id", updateGoals);
router.delete("/:id", deleteGoals);

module.exports = router;
