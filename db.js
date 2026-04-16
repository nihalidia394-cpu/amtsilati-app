const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // Default XAMPP adalah root
    password: "",       // Default XAMPP adalah kosong
    database: "amtsilati" 
});

db.connect((err) => {
    if (err) {
        console.error("Koneksi Database Gagal: " + err.stack);
        return;
    }
    console.log("Database Connected!");
});

module.exports = db;