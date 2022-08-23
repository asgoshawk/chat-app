const asyncHandler = require("express-async-handler");
const Group = require("../models/groupModel");
const Image = require("../models/imageModel");
const Message = require("../models/messageModel");
const Room = require("../models/roomModel");
const User = require("../models/userModel");

// @desc    Post message
// @route   POST /api/message/
// @access  Private
const sendMessage = asyncHandler(async (req, res) => {
  const { content, roomId } = req.body;

  if (!content || !roomId) {
    res.status(400);
    throw new Error("Invalid message data request.");
  }

  const room = await Room.findById(roomId);
  if (!room) {
    res.status(400);
    throw new Error("The room doesn't exist.");
  }

  const newMessage = {
    sender: req.user._id,
    content: content,
    group: room.group._id,
    room: roomId,
  };

  try {
    let message = await Message.create(newMessage);
    message = await message.populate("sender", "name avatar");
    message = await message.populate("group", "name users");
    message = await User.populate(message, {
      path: "group.users",
      select: "name avatar",
    });
    res.status(200).json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// @desc    Get all messages
// @route   GET /api/message/:groupId
// @access  Private
const getAllMessages = asyncHandler(async (req, res) => {
  const groupId = req.params.groupId;
  const group = await Group.findById(groupId);
  if (!group) {
    res.status(400);
    throw new Error("The group doesn't exist.");
  }

  // Check the user is in the group where the room located.
  const userExists = await Group.findById(groupId).find({
    users: req.user._id,
  });
  if (!userExists) {
    res.status(400);
    throw new Error("User has no access to these messages.");
  }

  try {
    let messages = await Message.find({ group: groupId }).populate(
      "sender",
      "name avatar"
    );
    //   .populate("group");
    messages = await Image.populate(messages, {
      path: "sender.avatar",
      select: "link",
    });
    res.status(200).json({ messages });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

module.exports = {
  sendMessage,
  getAllMessages,
};
