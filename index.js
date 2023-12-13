const express = require('express');
const app = express();
const port = 5000;
const usersRoutes = require('./routes/route');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', usersRoutes);

app.listen(port, function(){
    console.log(`Aplikasi berhasil digunakan pada port :  ${port} `)
})