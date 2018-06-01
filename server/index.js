const express = require('express');
const parser = require('body-parser');
const path = require('path');

require('../db/config/index.js');

const app = express();
const PORT = 3000;
const { router } = require('./router')

app.use(parser.json());
app.use(parser.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, (err) => {
  if(err) {
    console.log('error = ', err);
  } else {
    console.log('successfully connected to server');
  }
})