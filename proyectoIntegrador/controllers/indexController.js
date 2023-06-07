const productos = require("../data/data")
const db = require('../database/models/index')

const controlador = {
    index: function(req,res){
        db.Productos.findAll({
            order:[
                ['fecha_de_carga', 'DESC']
            ],
            raw: true
        })
        .then(function(data){
            console.log(data)
        })
        .catch(function(err){console.log(err)})

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