const express = require('express');
const app = express();
const db = require('./db'); // Pastikan ini mengarah ke db.js kamu
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Folder tempat index.html

// JALUR UNTUK MENERIMA PENDAFTARAN
app.post('/daftar', (req, res) => {
    const { nama, alamat, telepon } = req.body;
    const sql = "INSERT INTO santri (nama, alamat, telepon) VALUES (?, ?, ?)";
    
    db.query(sql, [nama, alamat, telepon], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ pesan: "Gagal simpan ke database" });
        } else {
            res.send({ status: "sukses", pesan: "Santri berhasil terdaftar!" });
        }
    });
});

app.listen(3000, () => {
    console.log("Server running di http://localhost:3000");
});