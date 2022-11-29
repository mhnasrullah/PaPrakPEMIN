const express = require('express');
const router = express.Router();
const prodiController = require("../controllers/prodi.controller")

/* GET users listing. */
router.get('/',prodiController.get);
router.post('/',prodiController.create);

module.exports = router;
