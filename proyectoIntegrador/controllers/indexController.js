const productos = require("../data/data")
const controlador = {
    index: function(req, res){
        res.render('inicio', {
            productos: productos.productos, 
            comentarios: productos.comentarios})
    },
    logout: function(req,res){
        req.session.usuario = undefined 
        res.redirect('/')
    }
}

module.exports = controlador;