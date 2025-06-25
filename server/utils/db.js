require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;

const setupDB = async () => {
  try {
    // Connect to MongoDB
    console.log('connecting to mongodb');
    mongoose.set('useCreateIndex', true);
    mongoose
      .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      .then(() =>
        console.log(`✓ MongoDB Connected!`)
      )
      .catch(err => console.log(err));
  } catch (error) {
    return error;
  }
};

module.exports = setupDB;
