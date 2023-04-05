const express = require('express');
const router = express.Router();
const ProductoControllers = require('../controllers/productoController');

router.get('/detalle/:id', ProductoControllers.detalle)
router.get('/agregar', ProductoControllers.agregar)
router.get('/busqueda', ProductoControllers.busqueda)

module.exports = router;