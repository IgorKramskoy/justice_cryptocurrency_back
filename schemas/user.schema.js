const {Schema, model} = require('mongoose');

const schema = new Schema({
  password: String,
  email: String,
  name: String,
  city: String,
  birthday: String,
  phone: String,
  avatar: String,
})

module.exports.UserSchema = model('User', schema)