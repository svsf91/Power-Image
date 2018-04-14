module.exports = function(mongoose){
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    username : {type : String, required : true},
    password : {type : String, required : true},
    firstName : String,
    lastName : String,
    email : String,
    phone : String,
    dateCreated : {
      type : Date,
      type : Date,
      type : Date,
      default: Date.now
    },
    facebook: {
      id: String,
      token: String
    }
  }, {collection: 'user', usePushEach: true});

  return userSchema;
};
