const mongoose = require('mongoose');

const Schema = mongoose.Schema

// Declare the Schema of the Mongo model
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema)

//Export the model
module.exports = User

