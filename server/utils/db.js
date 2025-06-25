require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;

const setupDB = async () => {
  try {
    // Connect to MongoDB
    console.log('connecting to mongodb');
    // mongoose.set('useCreateIndex', true);

    // await mongoose.connect(database.url, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false
    // });
    await mongoose.connect(database.url);

    console.log(`✓ MongoDB Connected!`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error; // Rethrow so caller can handle
  }
};

module.exports = setupDB;
