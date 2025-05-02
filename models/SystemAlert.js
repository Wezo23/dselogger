// models/SystemAlert.js

const mongoose = require('mongoose');

const SystemAlertSchema = new mongoose.Schema({
    imei: { type: String, required: true },
    uid: Number,
    dtm: { type: Date, required: true },
    seq: Number,
    alertCode: String,
    info: String
  });