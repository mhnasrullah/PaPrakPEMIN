var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  // checkConnection()
  res.json({
    "key" : require('crypto').randomBytes(64).toString('hex')}
  )
});

module.exports = router;
