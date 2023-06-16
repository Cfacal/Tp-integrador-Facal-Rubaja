const express = require('express');
const router = express.Router();
const ProductoControllers = require('../controllers/productoController');

router.get('/detalle/:id', ProductoControllers.detalle)
router.post('/detalle/:id', ProductoControllers.comentar)
router.get('/agregar', ProductoControllers.agregar)
router.post('/agregar', ProductoControllers.add)
router.get('/busqueda', ProductoControllers.busqueda)
router.post('/borrar/:id', ProductoControllers.eliminar_producto)
router.get('/editar/:id', ProductoControllers.update)
router.post('/editar/:id', ProductoControllers.editar)
module.exports = router;