const express = require("express");
const router = express.Router();
const {
  createGroup,
  getGroup,
  getAllGroups,
} = require("../controllers/chatController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/group").get(protect, getAllGroups).post(protect, createGroup);
router.route("/group/:id").get(protect, getGroup);
router.route("/group/:id/join").get(protect, joinGroup);
module.exports = router;
