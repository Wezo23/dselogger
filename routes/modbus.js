// routes/modbus.js
const express = require('express');
const ModbusData = require('../models/ModbusData');

const router = express.Router();

// POST /api/modbus
router.post('/', async (req, res) => {
  try {
    const modbusData = new ModbusData(req.body.data);
    await modbusData.save();
    res.status(201).send({ success: true });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;