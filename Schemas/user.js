const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        // required: true,
        min: 6
    },
    username: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;