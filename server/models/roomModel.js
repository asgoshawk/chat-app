const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a room name."],
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);
