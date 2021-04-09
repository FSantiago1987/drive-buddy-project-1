const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateOfBirth:{
    type: String,
    required: true
  },
  profilePicture: {
    type: Schema.Types.Mixed,
    required: false
  },
  messages: {
    type: Array,
    required: false
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  post_code: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: false
  },  
  feedback: {
      type: Array,
      required: false
  },
  languages: {
    type: Array,
    required: false
  },
  documents: {
    type: Array,
    required: false
  },
  service_description: {
    type: String,
    required: false
},
});
module.exports = User = mongoose.model("user", UserSchema);