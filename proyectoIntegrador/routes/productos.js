const express = require('express');
const router = express.Router();
const ProductoControllers = require('../controllers/productoController');

router.get('/detalle/:id')
router.get('/agregar')
router.get('/busqueda/:producto')

module.exports = router;