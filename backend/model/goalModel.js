const mongoose = require("mongoose");
/**
 * goalschema - create a Schema field(like an object models just like "type" in ts)
 */
const goalschema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GoalModel", goalschema);
