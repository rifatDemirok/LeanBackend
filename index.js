// backend/index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./Config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./Routes/Auth'));
app.use('/api/problem', require('./Routes/Problem'));
app.use('/api/kanban', require('./Routes/Kanban'));
app.use('machine',require('./Routes/Machine'));

// Sunucuyu dinlemeye başla
const PORT = process.env.PORT || 6105;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
