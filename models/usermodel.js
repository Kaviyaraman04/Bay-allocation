const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone_number: String,
  city: String,
  address: String,
  pincode: String,
  password: String,
  status: { type: Number, default: 1 }
});

module.exports = mongoose.model('UserDetail', userSchema);
