const express = require('express');
const SystemAlert = require('../models/SystemAlert');
const router = express.Router();

// POST /api/alerts
router.post('/', async (req, res) => {
  try {
    const alertData = {
      ...req.body.data,
      alertCode: req.body.data.alert,
      dtm: new Date(req.body.data.dtm)
    };
    
    const alert = new SystemAlert(alertData);
    await alert.save();
    
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;