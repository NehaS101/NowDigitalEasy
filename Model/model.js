const mongoose = require('mongoose');

const User_schema = mongoose.Schema({
    name: String,
    role: String,
    email: String,
    phoneNumber: Number
});

const User_model = mongoose.model('User', User_schema);

module.exports = User_model;