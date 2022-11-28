const express = require('express');
const router = express.Router();
const mahasiswaRoute = require("../controllers/mahasiswa.controller");

router.get('/',mahasiswaRoute.get);
router.get('/profile',mahasiswaRoute.profile);
router.get('/:nim',mahasiswaRoute.byNim);
router.post('/:nim/matakuliah/:mkId',mahasiswaRoute.addMk);
router.put('/:nim/matakuliah/:mkId',mahasiswaRoute.changeMk);

module.exports = router