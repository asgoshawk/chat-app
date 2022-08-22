const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Group = require("../models/groupModel");
const Room = require("../models/roomModel");

// @desc    Create a new group
// @route   POST /api/group
// @access  Private
const createGroup = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(400);
    throw new Error("User not found.");
  }

  const { name } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("Please give a group name.");
  }

  const group = await Group.create({
    name,
    groupAdmin: user._id,
    users: [user._id],
  });
});

// @desc    Get specific group
// @route   GET /api/group/:id
// @access  Private
const getGroup = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(400);
    throw new Error("User not found.");
  }

  const group = await Group.findById(req.params.id);
  if (!group) {
    res.status(400);
    throw new Error("Group not found.");
  }
});

// @desc    Delete specific group
// @route   DELETE /api/group/:id
// @access  Private
const deleteGroup = asyncHandler(async (req, res) => {});

// @desc    Get specific room
// @route   GET /api/room/:id
// @access  Private
const getRoom = asyncHandler(async (req, res) => {});

// @desc    Send a message
// @route   POST /api/message
// @access  Private
const sendMessage = asyncHandler(async (req, res) => {});

module.exports = {
  createGroup,
  getGroup,
  deleteGroup,
  sendMessage,
};
