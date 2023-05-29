const productos = require("../data/data")
const db = require('../database/models/index')
const controlador = {
    detalle: function(req,res){
        let id = req.params.id
        res.render('product',{productos: productos.productos, comentarios: productos.comentarios, id:id})
    },
    agregar: function(req,res){
        res.render('product-add', {UsuarioLogueado: true})
    },
    busqueda: function(req,res){
        res.render('search-results', {productos: productos.productos, comentarios: productos.comentarios})
    },
    add:function(req,res){
        let {producto,nombre_prod,Descripcion,Fecha} = req.body
        db.Productos.create({
            foto_del_producto: producto,
            nombre: nombre_prod,
            descripcion: Descripcion,
            fecha_de_carga: Fecha

            // Falta hacer las relaciones entre tablas

        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)

        })

    }
}

module.exports = controlador;