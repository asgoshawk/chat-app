const express = require("express");
const {
  uploadAvatar,
  deleteAvatar,
} = require("../controllers/uploadController");
const router = express.Router();
const { upload } = require("../config/upload");
const { protect } = require("../middlewares/authMiddleware");

router
  .route("/avatar")
  .post(protect, upload.single("avatar"), uploadAvatar)
  .delete(protect, deleteAvatar);

module.exports = router;
