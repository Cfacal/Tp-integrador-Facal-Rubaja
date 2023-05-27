const usuarios = require('../data/data')
const cript = require('bcryptjs');
const db = require('../database/models/index')
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
    },
    crear: function(req,res){
        let {Email,usuario,Contraseña,Fecha,Documento,Foto} = req.body
        let contra_encriptada = bcrypt.hashSync(Contraseña,12) 
        db.Usuarios.create({
            Email,
            usuario,
            Contraseña:contra_encriptada,
            Fecha,
            Documento,
            Foto   
        })
        .then(function(data){
            res.redirect('')

        })
        .catch(function(err){
            console.log(err)
        })

    }
}


module.exports = controlador;