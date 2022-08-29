const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Gernerate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc    Register
// @route   POST /api/user/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   console.log(req.body);
  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields.");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }

  // Hash passwaord
  const salt = await bcrypt.genSalt(10);
  const hashedPasswaord = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPasswaord,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
});

// @desc    Login a user
// @route   POST /api/user/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Check user and passwaord match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials.");
  }
});

// @desc    Get current user profile
// @route   GET /api/user/profile
// @access  Private
const getProfile = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar,
  };
  res.status(200).json(user);
});

// @desc    Update user profile
// @route   PUT /api/user/profile
// @access  Private
const updateProfile = asyncHandler(async (req, res) => {});

// @desc    Get or search users
// @route   GET /api/user?search=
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword)
    .find({ _id: { $ne: req.user._id } })
    .select("-password");

  res.send(users);
});

module.exports = {
  loginUser,
  registerUser,
  getProfile,
  updateProfile,
  getUsers,
};
