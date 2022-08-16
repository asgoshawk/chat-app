const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please add a group name."],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cover: {
    type: String,
  },
});

module.exports = mongoose.model("Group", groupSchema);
