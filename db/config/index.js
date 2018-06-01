const mongoose = require('mongoose');
const URI = 'mongodb://airbnb:airbnb123456@ds117495.mlab.com:17495/airbnb';

const connection = mongoose.connect(URI, {}).then(() => {
  console.log('connected to the database');
});

module.exports.connection = connection;