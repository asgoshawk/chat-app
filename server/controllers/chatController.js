const asyncHandler = require("express-async-handler");
const Image = require("../models/imageModel");
const User = require("../models/userModel");
const Group = require("../models/groupModel");
const Room = require("../models/roomModel");

// @desc    Create a new group
// @route   POST /api/chat/group
// @access  Private
const createGroup = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("Please give a group name.");
  }

  let group = await Group.create({
    name,
    groupAdmin: req.user._id,
    users: [req.user._id],
  });

  const room = await Room.create({
    name: "Common",
    group: group._id,
  });

  if (group) {
    group = await group.populate("groupAdmin", "name avatar");
    group = await group.populate("users", "name avatar");
    res.status(201).json({
      group,
      room,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create a new group.");
  }
});

// @desc    Get specific group
// @route   GET /api/chat/group/:id
// @access  Private
const getGroup = asyncHandler(async (req, res) => {
  let groupExists = await Group.findById(req.params.id);
  if (!groupExists) {
    res.status(400);
    throw new Error("Group not found.");
  }

  let group = await Group.findById(req.params.id)
    .populate("groupAdmin", "name avatar")
    .populate("users", "name avatar");

  group = await Image.populate(group, {
    path: "users.avatar",
    select: "link",
  });

  const userExists = await Group.findById(req.params.id).exists({
    _id: req.user._id,
  });

  res.status(200).json({
    group,
    isMember: userExists ? true : false,
  });
});

// @desc    Delete specific group
// @route   DELETE /api/chat/group/:id
// @access  Private
const deleteGroup = asyncHandler(async (req, res) => {});

module.exports = {
  createGroup,
  getGroup,
  deleteGroup,
};
