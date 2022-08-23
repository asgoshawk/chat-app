const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getAllMessages,
} = require("../controllers/messageController");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").post(protect, sendMessage);
router.route("/:groupId").get(protect, getAllMessages);

module.exports = router;
