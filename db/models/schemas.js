const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const host = new Schema ({
  joinDate: Number, //this might not work
	languages: String,
	response_rate: Number,
	response_time: String,
	picture: String,
	name: String,
	description: String,
	ratings: Number,
	location: String,
	superHost: Boolean,
  verified: Boolean,
  listing_id: Number,
  map: String
});

const location = new Schema ({
  description: String,
  city: String,
  country_state: String,
  listing_id: Number
  // Feature: [] might be optional
})

const Host = mongoose.model('Host', host);

module.exports.Host = Host;