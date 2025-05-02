// models/ModbusData.js

const mongoose = require('mongoose');

const ModbusDataSchema = new mongoose.Schema({
    imei: { type: String, required: true },
    uid: Number,
    dtm: { type: Date, required: true },
    seq: Number,
    sig: Number,
    modbus: [{
      sid: Number,
      stat: Number,
      rcnt: Number,
      Wind: Number,
      ModuleTemp: Number,
      AmbientTemp1: Number,
      Humidity: Number,
      PYRA: Number
    }]
  });