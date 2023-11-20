const mongoose = require('mongoose');

//schema for user
const User_schema = mongoose.Schema({
    name: String,
    role: String,
    email: String,
    phoneNumber: Number
});

//user model
const User = mongoose.model('User', User_schema);

module.exports = User;