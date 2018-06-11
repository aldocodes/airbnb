const { Host } = require('../../db/models/schemas.js');
const mongoose = require('mongoose');
const hostData = require('../../db/sampleData.json');

// let saveListing = (listings, callback) => {
//   console.log("here are the listings..", listings);
//   listings.forEach(listing =>
//     Listing.create(listing, err => {
//       callback(err);
//     })
//   );
// };


const hostCtrl = {
  get: (req, res) => {
    Host.find({})
      .then(data => {
        console.log("successfully fetched listing from DB");
        res.status(200).send(data);
      })
      .catch(err => {
        console.log("Failed to retrieve database", err);
        res.status(404);
      });
  },
  //sample data
  post: (req, res) => {
    Host.create(hostData).then((data)=>{
      console.log('successful post in api/host')
      res.status(201)
      .send(data)
      .catch((err) => {
        console.log('unsuccessfully creating data', err);
      })
    })
  }  
};


module.exports.hostCtrl = hostCtrl;
// module.exports.locationCtrl = locationCtrl;