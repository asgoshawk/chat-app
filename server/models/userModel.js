const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Please add a user name."],
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Please add an email."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password."],
    },
    avatar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
