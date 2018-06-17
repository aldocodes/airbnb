const { Host } = require('../../db/models/schemas.js');
const mongoose = require('mongoose');
// const hostData = require('../../db/sampleData.js');

const hostCtrl = {
  get: (req, res) => {
    console.log('listing_id', req.query);
    Host.findOne({listing_id: req.query.listing_id})
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