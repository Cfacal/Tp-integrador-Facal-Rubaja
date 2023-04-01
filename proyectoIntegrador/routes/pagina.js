const express = require('express');
const router = express.Router();
const PaginaControllers = require('../controllers/paginaController');

router.get('/inicio');
router.get('/producto/detalle/:id')
router.get('/producto/agregar')
router.get('/ingresar')
router.get('/perfil/editar/:perfil')
router.get('/perfil/:perfil')
router.get('/perfil/registrarse')
router.get('/producto/busqueda/')

module.exports = router;