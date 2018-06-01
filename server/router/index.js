const router = require('express').Router();
const { hostCtrl } = require('../controllers/index.js');

router.route('/host')
  .get(hostCtrl.get);

module.exports.router = router;