const db = require('../config/db'); // Koneksi DB

exports.getAllSiswa = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM siswa ORDER BY nama_siswa ASC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: 'Error mengambil data siswa' });
    }
};

exports.getSiswaById = async (req, res) => {
    const { kode_siswa } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM siswa WHERE kode_siswa = ?', [kode_siswa]);
        if (rows.length === 0) return res.status(404).json({ message: 'Siswa tidak ditemukan' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ message: 'Error mengambil detail siswa' });
    }
};

exports.createSiswa = async (req, res) => {
    const { kode_siswa, nama_siswa, alamat, tanggal_lahir, jurusan } = req.body;
    const values = [kode_siswa, nama_siswa, alamat, tanggal_lahir, jurusan];

    try {
        await db.query('INSERT INTO siswa (kode_siswa, nama_siswa, alamat, tanggal_lahir, jurusan) VALUES (?, ?, ?, ?, ?)', values);
        res.status(201).json({ message: 'Siswa berhasil ditambahkan', data: req.body });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Kode siswa sudah ada.' });
        res.status(500).json({ message: 'Error menambahkan siswa' });
    }
};

exports.updateSiswa = async (req, res) => {
    const { kode_siswa } = req.params;
    const { nama_siswa, alamat, tanggal_lahir, jurusan } = req.body;
    const values = [nama_siswa, alamat, tanggal_lahir, jurusan, kode_siswa];

    try {
        const [result] = await db.query('UPDATE siswa SET nama_siswa = ?, alamat = ?, tanggal_lahir = ?, jurusan = ? WHERE kode_siswa = ?', values);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Siswa tidak ditemukan' });
        res.json({ message: 'Siswa berhasil diperbarui' });
    } catch (err) {
        res.status(500).json({ message: 'Error memperbarui siswa' });
    }
};

exports.deleteSiswa = async (req, res) => {
    const { kode_siswa } = req.params;
    try {
        const [result] = await db.query('DELETE FROM siswa WHERE kode_siswa = ?', [kode_siswa]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Siswa tidak ditemukan' });
        res.json({ message: 'Siswa berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: 'Error menghapus siswa' });
    }
};
