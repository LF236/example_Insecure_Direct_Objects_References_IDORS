const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.mostrarPaginaPrincipal);
router.get('/infoEmpleado', mainControllers.infoEmpleado);
module.exports = router;