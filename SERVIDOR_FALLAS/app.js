require('colors');
const express = require('express');
const app = express();
const path = require('path');
const puerto = 3030;


// Configura ruta publica
const routePublic = path.resolve(__dirname + '/public');
app.use(express.static(routePublic));

// Configurar el archivo de rutas
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

// Configuramos EJS
app.set('view engine', 'ejs');

app.listen(puerto, () => {
    console.log(`Servidor Listo en: ` + `http://localhost:${puerto}`.blue);
});