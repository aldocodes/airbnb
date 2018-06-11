const mongoose = require('mongoose');
const URI = 'mongodb://localhost/airbnb';

const connection = mongoose.connect(URI, {}).then(() => {
  console.log('connected to the database');
});

module.exports.connection = connection;