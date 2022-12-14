const express = require('express');
const router = express.Router();
const mahasiswaRoute = require("../controllers/mahasiswa.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get('/',authMiddleware,mahasiswaRoute.get);
router.get('/profile',authMiddleware,mahasiswaRoute.profile);
router.get('/:nim',authMiddleware,mahasiswaRoute.byNim);
router.post('/:nim/matakuliah/:mkId',authMiddleware,mahasiswaRoute.addMk);
router.put('/:nim/matakuliah/:mkId',authMiddleware,mahasiswaRoute.changeMk);

module.exports = router