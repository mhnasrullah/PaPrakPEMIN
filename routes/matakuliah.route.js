const express = require('express');
const router = express.Router();
const matkulController = require("../controllers/matakuliah.controller");
const authMiddleware = require("../middleware/auth.middleware")

/* GET users listing. */
router.get('/',authMiddleware,matkulController.get);

module.exports = router;
