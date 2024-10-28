const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema for the user
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


// Create the model from the schema and export it
module.exports =  mongoose.model('Auth', AuthSchema);