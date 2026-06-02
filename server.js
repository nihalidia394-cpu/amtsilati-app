const express = require('express');
const app = express();
const db = require('./db'); 
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public')); 


app.post('/daftar', (req, res) => {
    const { nama, alamat, telepon } = req.body;

    const sql = "INSERT INTO pendaftar (nama, alamat, telepon) VALUES (?, ?, ?)";

    db.query(sql, [nama, alamat, telepon], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                status: "gagal",
                pesan: err.message
            });
        }

        res.json({
            status: "sukses",
            pesan: "Santri berhasil terdaftar!"
        });
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});