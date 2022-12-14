const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  getUsers,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", protect, getUsers);
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);

module.exports = router;
