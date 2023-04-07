const productos = require("../data/data")
const controlador = {
    detalle: function(req,res){
        let id = req.params.id
        res.render('product',{productos: productos.productos, comentarios: productos.comentarios, id:id})
    },
    agregar: function(req,res){
        res.render('product-add')
    },
    busqueda: function(req,res){
        res.render('search-results', {productos: productos.productos, comentarios: productos.comentarios})
    }
}

module.exports = controlador;