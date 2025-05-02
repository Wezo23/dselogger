require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const modbusRoutes = require('./routes/modbus');
const authRoutes = require('./routes/auth');
const alertRoutes = require('./routes/alerts');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/modbus', modbusRoutes);
app.use('/api/login', authRoutes);
app.use('/api/alerts', alertRoutes);

// Database Connection
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});