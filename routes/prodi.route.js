const express = require('express');
const router = express.Router();
const prodiController = require("../controllers/prodi.controller")

/* GET users listing. */
router.get('/',prodiController.get);

module.exports = router;
