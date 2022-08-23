const express = require("express");
const router = express.Router();
const { createGroup, getGroup } = require("../controllers/chatController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/group", protect, createGroup);
router.route("/group/:id").get(protect, getGroup);

module.exports = router;
