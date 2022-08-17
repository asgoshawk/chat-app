const express = require("express");
const { uploadAvatar } = require("../controllers/uploadController");
const router = express.Router();
const { upload } = require("../config/upload");
const { protect } = require("../middlewares/authMiddleware");

router.post("/avatar", upload.single("avatar"), uploadAvatar);

module.exports = router;
