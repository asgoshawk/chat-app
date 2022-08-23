const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      trim: true,
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
