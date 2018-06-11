const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const locationSchema = new Schema ({
  description: String,
  city: String,
  country_state: String,
  listing_id: Number
  // Feature: [] might be optional
})

const Host = mongoose.model('Host', hostSchema);
const Location = mongoose.model('Location', locationSchema);

module.exports = {  
  Host,
  Location 
};