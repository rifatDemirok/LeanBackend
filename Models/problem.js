// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const problemSchema = new mongoose.Schema({
    id: {
        type: Number,
       required: false,},
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Problem', problemSchema);
