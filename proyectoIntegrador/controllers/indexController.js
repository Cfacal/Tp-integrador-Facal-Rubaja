const productos = require("../data/data")
const controlador = {
    index: function(req, res){
        res.render('inicio', {
            productos: productos.productos, 
            comentarios: productos.comentarios, UsuarioLogueado: true})
    }
}

module.exports = controlador;