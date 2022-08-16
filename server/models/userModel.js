const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: [true, "Please add a user name."],
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "Please add an email."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password."],
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
