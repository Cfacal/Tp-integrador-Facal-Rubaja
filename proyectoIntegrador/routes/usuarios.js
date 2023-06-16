var express = require('express');
var router = express.Router();
const usuariosControllers = require('../controllers/usuariosController');

router.get('/ingresar', usuariosControllers.ingresar);
router.post('/ingresar', usuariosControllers.chequearUsuario);

router.get('/editar/:perfil', usuariosControllers.editar_perfil);

router.get('/perfil/:id', usuariosControllers.ingresar_perfil);

router.post('/registrarse',usuariosControllers.crear);
router.get('/registrarse', usuariosControllers.registrarse);

router.get('/busqueda', usuariosControllers.buscar)
module.exports = router;
