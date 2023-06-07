const productos = require("../data/data")
const db = require('../database/models/index')
const op = db.Sequelize.Op

const controlador = {
    index: function(req,res){
        db.Productos.findAll({
            order:[
                ['fecha_de_carga', 'DESC']
            ],
            raw: true
        })
        .then(function(data){
            res.render('inicio', {
                     productos: data
            })
        })
        .catch(function(err){console.log(err)})
    },
    logout: function(req,res){
        req.session.usuario = undefined 
        res.redirect('/')
    }
}

module.exports = controlador;

// res.render('inicio', {
//     productos: productos.productos, 
//     comentarios: productos.comentarios})

// res.render('inicio', {
//     productos: data
// })