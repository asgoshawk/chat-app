const asyncHandler = require("express-async-handler");
const axios = require("axios");
const FormData = require("form-data");
const User = require("../models/userModel");
const Image = require("../models/imageModel");

// @desc    Upload user avatar
// @route   POST /api/avatar
// @access  Private
const uploadAvatar = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  //   Upload image to Imgur
  const encoded_image = req.file.buffer.toString("base64");
  const formData = new FormData();
  formData.append("image", encoded_image);
  formData.append("album", process.env.IMGUR_ALBUM_ID);
  const imgurRes = await axios({
    method: "post",
    url: "https://api.imgur.com/3/image",
    data: formData,
    headers: {
      Authorization: `Bearer ${process.env.IMGUR_ACCESS_TOKEN}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  if (imgurRes.status !== 200) {
    res.status(400);
    throw new Error("Failed to upload image to imgur.");
  }

  const { id, link } = imgurRes.data;

  //   Update the image id & link if the avatar exists; otherwise, create new one.
  let avatar = null;
  if (user.avatar) {
    const formData = new FormData();
    avatar = await Image.findById(user.avatar._id);
    const imageHash = avatar.imageId;
    // Seems not need to await the deletion.
    axios({
      method: "delete",
      url: `https://api.imgur.com/3/image/${imageHash}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${process.env.IMGUR_ACCESS_TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
    });

    avatar = { ...avatar, link, imageId: id };
    await avatar.save();
  } else {
    avatar = await Image.create({
      imageId: id,
      link: link,
      owner: user._id,
    });

    user.avatar = avatar;
    await user.save();
  }

  res.status(200).json(avatar);
});

// @desc    Delete user avatar
// @route   DELETE /api/avatar
// @access  Private
const deleteAvatar = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user.avatar) {
    res.status(400);
    throw new Error("No avatar to delete.");
  }

  const imageToDelete = await Image.findById(user.avatar._id);
  const formData = new FormData();

  const imgurRes = await axios({
    method: "delete",
    url: `https://api.imgur.com/3/image/${imageToDelete.imageId}`,
    data: formData,
    headers: {
      Authorization: `Bearer ${process.env.IMGUR_ACCESS_TOKEN}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  if (imgurRes.status == 200) {
    await Image.findByIdAndDelete(user.avatar._id);
    user.avatar = undefined;
    await user.save();
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(400);
    throw new Error("Failed to delete image from imgur.");
  }
});

module.exports = {
  uploadAvatar,
  deleteAvatar,
};
