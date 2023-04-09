var express = require('express');
var router = express.Router();
const usuariosControllers = require('../controllers/usuariosController');

router.get('/ingresar', usuariosControllers.ingresar);
router.get('/editar/:perfil?', usuariosControllers.editar_perfil);
router.get('/perfil', usuariosControllers.ingresar_perfil);
router.get('/registrarse', usuariosControllers.registrarse);

module.exports = router;
