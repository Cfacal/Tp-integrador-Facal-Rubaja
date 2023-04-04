var express = require('express');
var router = express.Router();
const usuariosControllers = require('../controllers/usuariosController');

router.get('/ingresar')
router.get('/editar/:perfil')
router.get('/:perfil')
router.get('/registrarse')

module.exports = router;
