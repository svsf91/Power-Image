const express = require('express');
const router = express.Router();
const imageMethod = require('../models/image/image.model.server.js');

//image
router.post('/upload', uploadImage);
router.get('/metaData/:name', getImageMetaData);

// upload image
function uploadImage(req, res) {
  const imageProperty = req.body;
  imageMethod
    .setImageMetaData(imageProperty)
    .then(function (image) {
      res.send('');
    });
}

function getImageMetaData(req, res) {
  const name = req.params['name'];
  imageMethod
    .getImageMetaData(name)
    .then(function(image) {
      res.send(image);
    }, function(error) {
      res.sendStatus(400);
    })
}

module.exports = router;
