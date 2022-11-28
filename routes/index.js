var express = require('express');
var router = express.Router();
const {checkConnection} = require("../utils/funct")

/* GET home page. */
router.get('/', async function (req, res, next) {
  checkConnection()
  res.render('index', { title: 'Express' });
});

module.exports = router;
