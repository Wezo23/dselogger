// models/LoginEvent.js
const mongoose = require('mongoose');

const LoginEventSchema = new mongoose.Schema({
  imei: { type: String, required: true },
  model: String,
  cid: String,
  type: String,
  hwver: String,
  swver: String,
  mdbver: String,
  time: { type: Date, required: true },
  sig: Number,
  nw: String
});

module.exports = mongoose.model('LoginEvent', LoginEventSchema);