const express = require('express');
const app = express();
const port = 5000;
const usersRoutes = require('./routes/route');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Atur domain asal yang diperbolehkan
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Atur metode yang diperbolehkan
    res.header('Access-Control-Expose-Headers', 'auth-token');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Atur header yang diperbolehkan
    next();
  });
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', usersRoutes);

app.listen(port, function(){
    console.log(`Aplikasi berhasil digunakan pada port :  ${port} `)
})