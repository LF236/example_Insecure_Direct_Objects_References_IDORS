require('colors');
const express = require('express');
const app = express();
const path = require('path');
const puerto = 3030;
const cookieParser = require('cookie-parser');
// Configurar parametros de session
const session = require('express-session');
app.use(session({ secret: 'HOLA C:' }));
// Cookie configuration
app.use(cookieParser());
// Procces data of forms 
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

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