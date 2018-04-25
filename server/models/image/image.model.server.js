const imageModel = require('./image.schema.server.js');
// const imageModel = mongoose.model('Image', imageSchema);
function setImageMetadata(imageProperty) {
  const image = {
    name: imageProperty.name,
    dateCreated: Date.now(),
    size: imageProperty.size,
    url: imageProperty.url
  };
  return imageModel.create(image);
}

function getImageMetaData(name) {
  return imageModel.find({name: name});
}
const api = {
  'setImageMetaData': setImageMetadata,
  'getImageMetaData': getImageMetaData
};

module.exports = api;
