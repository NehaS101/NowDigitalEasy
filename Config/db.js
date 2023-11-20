const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//mongo db connection 
const connection = mongoose.connect(process.env.mongo_url);

module.exports = connection;