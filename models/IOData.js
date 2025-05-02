const mongoose = require('mongoose');

const IODataSchema = new mongoose.Schema({
  imei: { 
    type: String, 
    required: true,
    match: [/^\d{15}$/, 'Invalid IMEI format']
  },
  uid: Number,
  dtm: { 
    type: Date,
    required: true 
  },
  seq: Number,
  sig: Number,
  io: {
    di1: { type: Number, enum: [0, 1] },
    di2: { type: Number, enum: [0, 1] },
    a1: Number,
    a2: Number,
    s1: Number,
    p1: Number
  },
  dev: {
    sysv: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('IOData', IODataSchema);