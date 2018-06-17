const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {seeds} = require('../sampleData.js');

const hostSchema = new Schema ({
  // joinDate: Number, //this might not work
  name: String,
  location: String,
  join_date: String,
  reviews: String,
  references: String,
	description: String,
	languages: String,
	response_rate: String,
	response_time: String,
	picture: String,
	superHost: Boolean,
  verified: Boolean,
  listing_id: Number,
  map: String,
  locationDescription: String
});

const Host = mongoose.model('Host', hostSchema);

Host.collection.insert(seeds, function(err, docs){
  if (err) {
    console.log("not seeded ", err);
  }
  console.log("successfully seeded " , docs);
})

module.exports = {  
  Host
};