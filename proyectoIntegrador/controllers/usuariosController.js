const usuarios = require('../data/data')
const bcrypt = require('bcryptjs');
const db = require('../database/models/index')
const controlador = {
    ingresar: function(req, res){
        res.render('login')
    },
    chequearUsuario: function(req,res){
        let {usuario, contraseña, recordarme} = req.body 

        db.Usuarios.findOne({
            where: {
                email
            }, 
            raw: true
        })
        .then(function(usuario){
            let verificacionContra = bcrypt.compareSync(contraseña, usuario.contraseña)
            if (verificacionContra){
                req.session.user = {
                    id: usuario.id,
                    usuario: usuario.nombre,
                    email: usuario.emial
                }
            }

            if (recordarme === 'on'){
                res.cookie('recordarUsuario', {
                    id: usuario.id, 
                    usuario: usuario.nombre,
                    email: usuario.emial
                }, 
                {
                    maxAge: 1000*60*2
                }
                
                )
            }

            res.redirect ('/users/profile')
        }).catch(function(error){
            console.log(error)
        }
        )

        res.render('login')
    },
    editar_perfil: function(req,res){
        res.render('profile-edit',)
    },
    ingresar_perfil: function(req,res){
        res.render('profile', {usuario:usuarios.usuario,productos:usuarios.productos,comentarios:usuarios.comentarios})
    },
    registrarse: function(req,res){
        res.render('register')
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
            res.redirect('/')

        })
        .catch(function(err){
            console.log(err)
        })

    }
}


module.exports = controlador;