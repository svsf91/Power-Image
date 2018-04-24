const express = require('express');
const router = express.Router();
const imageMethod = require('../models/image/image.model.server.js');

//image
router.post('/upload', uploadImage);

// upload image
function uploadImage(req, res) {
  const imageProperty = req.body;
  imageMethod
    .setUploadImageMetaData(imageProperty)
    .then(function (image) {
      res.send('');
    });
}

module.exports = router;
