const imageModel = require('./image.schema.server.js');
// const imageModel = mongoose.model('Image', imageSchema);
function setUploadImageMetadata(imageProperty) {
  const image = {
    name: imageProperty.name,
    dateCreated: Date.now()
  };
  return imageModel.create(image);
}


const api = {
  'setUploadImageMetaData': setUploadImageMetadata
};

module.exports = api;
