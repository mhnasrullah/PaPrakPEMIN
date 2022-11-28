const express = require('express');
const router = express.Router();
const matkulController = require("../controllers/matakuliah.controller")

/* GET users listing. */
router.get('/',matkulController.get);

module.exports = router;
