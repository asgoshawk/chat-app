const multer = require("multer");

const upload = multer({
  limits: { fileSize: 2000000 },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      callback(new Error("Please upload an jpg/jpeg or png file."));
    }

    callback(null, true);
  },
});

module.exports = {
  upload,
};
