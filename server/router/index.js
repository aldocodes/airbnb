const router = require('express').Router();
const { hostCtrl } = require('../controllers/index.js');

router.route('/host')
  .get(hostCtrl.get)
  .post(hostCtrl.post)

module.exports.router = router;
