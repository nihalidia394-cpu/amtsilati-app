const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Menangani data form jika ada
app.use(express.static('public'));

// Test route
app.get('/tes', (req, res) => {
    res.json({
        status: 'ok',
        pesan: 'Server berjalan'
    });
});

// Route pendaftaran (SUDAH DIPERBAIKI)
app.post('/daftar', (req, res) => {
    const { nama, alamat, umur, jk, nohp } = req.body;

    const sql = `
        INSERT INTO pendaftar 
        (nama, alamat, umur, jk, telepon) 
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [nama, alamat, umur, jk, nohp],
        (err, result) => {
            if (err) {
                console.log("Error Database:", err);
                return res.status(500).json({
                    status: "gagal",
                    pesan: err.message
                });
            }

            res.json({
                status: "sukses",
                pesan: "Santri berhasil terdaftar!"
            });
        }
    );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});