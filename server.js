const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json());

app.use('/api/siswa', require('./routes/siswaRoutes'));

app.get('/', (req, res) => {
    res.send('API Server Berjalan! Akses /api/siswa');
});

// Start server dan koneksi DB
app.listen(PORT, () => {
    console.log(`Backend server berjalan di http://localhost:${PORT}`);
    require('./config/db');
});
