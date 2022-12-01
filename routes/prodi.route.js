const express = require('express');
const router = express.Router();
const prodiController = require("../controllers/prodi.controller")
const authMiddleware = require("../middleware/auth.middleware");

/* GET users listing. */
router.get('/',prodiController.get);
router.post('/',authMiddleware,prodiController.create);

module.exports = router;
