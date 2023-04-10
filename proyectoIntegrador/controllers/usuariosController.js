const usuarios = require('../data/data')
const controlador = {
    ingresar: function(req,res){
        res.render('login', {UsuarioLogueado: false})
    },
    editar_perfil: function(req,res){
        res.render('profile-edit',  {UsuarioLogueado: true} )
    },
    ingresar_perfil: function(req,res){
        res.render('profile', {usuario:usuarios.usuario,productos:usuarios.productos,comentarios:usuarios.comentarios, UsuarioLogueado: true})
    },
    registrarse: function(req,res){
        res.render('register', {UsuarioLogueado: false})
    }

}

module.exports = controlador;