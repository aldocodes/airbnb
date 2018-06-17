const mongoose = require('mongoose');
const URI = 'mongodb://db/airbnb';

// const connection = mongoose.connect(URI, {}).then(() => {
//   console.log('connected to the database');
// });

const connection = mongoose.connect(URI, function(err){
  if (err) {
    console.log('failed to connect to the database ', err);
  } 
  console.log('successfully connected to the database');
})

//add a line to populate the database
module.exports.connection = connection;

// const mongoose = require('mongoose');
// const URI = 'mongodb://localhost/airbnb';

// const connection = mongoose.connect(URI).exec()
//   .then(() => {
//     console.log('connected to the database');
//   })
//   .catch(err => {
//     console.log('failed to connect to database ', err);
//   })

// module.exports.connection = connection;