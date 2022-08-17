const asyncHandler = require("express-async-handler");
const axios = require("axios");

const uploadAvatar = asyncHandler(async (req, res) => {
  const encoded_image = req.file.buffer.toString("base64");

  //   const formData = new FormData();
  //   formData.append("image", encoded_image);

  const imgurRes = await axios({
    method: "post",
    url: "https://api.imgur.com/3/image",
    data: encoded_image,
    headers: {
      Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
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
    // console.log(imgurRes.data.link);
    res.status(200).json({
      avatarUrl: imgurRes.data.link,
    });
  } else {
    res.status(400);
    throw new Error("Failed to upload image to imgur.");
  }
});

module.exports = {
  uploadAvatar,
};
