const express = require('express');
const LoginEvent = require('../models/LoginEvent');
const router = express.Router();

// Authentication middleware
const auth = (req, res, next) => {
  const token = req.headers['accesstoken'];
  if(!token || token !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// POST /api/login
router.post('/', auth, async (req, res) => {
  try {
    const loginEvent = new LoginEvent(req.body);
    await loginEvent.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;