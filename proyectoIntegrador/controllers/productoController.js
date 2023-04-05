const productos = require("../data/data")
const controlador = {
    detalle: function(req,res){
        res.render('product',{productos: productos.productos})
    },
    agregar: function(req,res){
        res.render('product-add')
    },
    busqueda: function(req,res){
        res.render('search-results', {productos: productos.productos})
    }
}

module.exports = controlador;