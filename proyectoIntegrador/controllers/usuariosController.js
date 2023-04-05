const usuarios = require('../data/data')
const controlador = {
    ingresar: function(req,res){
        res.render('login')
    },
    editar_perfil: function(req,res){
        res.render('profile-edit')
    },
    ingresar_perfil: function(req,res){
        res.render('profile', {usuario:usuarios.usuario})
    },
    registrarse: function(req,res){
        res.render('register')
    }

}

module.exports = controlador;