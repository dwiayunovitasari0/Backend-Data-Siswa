const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswaController');
const { validateSiswa } = require('../middleware/validateSiswa');

router.get('/', siswaController.getAllSiswa);
router.get('/:kode_siswa', siswaController.getSiswaById);
router.post('/', siswaController.createSiswa);
router.put('/:kode_siswa', siswaController.updateSiswa);
router.delete('/:kode_siswa', siswaController.deleteSiswa);

module.exports = router;
 