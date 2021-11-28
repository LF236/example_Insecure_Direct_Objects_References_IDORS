require('colors');
const express = require('express');
const app = express();

const puerto = 3030;

app.get('/', (req, res) => {
    res.send('Hola AYUWOKI');
});

app.listen(puerto, () => {
    console.log(`Servidor Listo en: ` + `http://localhost:${puerto}`.blue);
});