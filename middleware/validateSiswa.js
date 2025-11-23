// middleware/validateSiswa.js
const validateSiswa = (req, res, next) => {
  const { kode_siswa, nama_siswa, alamat, tanggal_lahir, jurusan } = req.body;
  const isEdit = req.method === 'PUT';

  // 1. Validasi Kode Siswa (Wajib saat POST)
  if (!isEdit && !kode_siswa) {
    return res.status(400).json({ message: 'Kode siswa wajib diisi saat menambahkan.' });
  }

  // 2. Validasi Nama Siswa
  if (!nama_siswa) {
    return res.status(400).json({ message: 'Nama siswa wajib diisi.' });
  }

  // 3. Validasi Alamat
  if (!alamat) {
    return res.status(400).json({ message: 'Alamat wajib diisi.' });
  }

  // 4. Validasi Tanggal Lahir (harus ada dan format tanggal yang valid)
  if (!tanggal_lahir || isNaN(new Date(tanggal_lahir).getTime())) {
    return res.status(400).json({ message: 'Tanggal lahir wajib diisi dengan format tanggal yang benar.' });
  }

  // 5. Validasi Jurusan
  if (!jurusan) {
    return res.status(400).json({ message: 'Jurusan wajib diisi.' });
  }

  next(); // Lanjutkan ke controller jika semua valid
};

module.exports = {
  validateSiswa,
};
