const controlador = {
    detalle: function(req,res){
        res.render('product')
    },
    agregar: function(req,res){
        res.render('product-add')
    },
    busqueda: function(req,res){
        res.render('search-results')
    }
}

module.exports = controlador;