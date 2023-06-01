const usuarios = require('../data/data')
const bcrypt = require('bcryptjs');
const db = require('../database/models/index')

const controlador = {
    ingresar: function(req, res){
        if(req.session.usuario == undefined){
            res.render('login')
        }else{
            res.redirect("/")
        }
    },
    chequearUsuario: function(req,res){
        let {usuario, password, recordarme} = req.body 
        db.Usuarios.findOne({
            where: {
                emial: usuario
            }, 
            raw: true
        })
        .then(function(usuario){
            let verificacionContra = bcrypt.compareSync(password, usuario.password)
            console.log(verificacionContra)
            if (verificacionContra){
                req.session.usuario = {
                    id: usuario.id,
                    usuario: usuario.nombre,
                    email: usuario.emial
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
                res.redirect('/')
                
            }
        }).catch(function(error){
            console.log(error)
        }
        )
    },
    editar_perfil: function(req,res){
        if(req.session.usuario != undefined){
            res.render('profile-edit')
        }else{
            res.redirect("/usuarios/ingresar")
        }
    },
    ingresar_perfil: function(req,res){
    if(req.session.usuario != undefined){
            
            db.Usuarios.findAll({
                raw:true, 
                nest:true, 
                include:[
                    {association:'Productos'}
                ]
            })
            .then(function(data){
                res.render('profile',{usuario:data, comentarios: usuarios.comentarios})
            })
            .catch(function(err){
                console.log(err)
            })
        }else{
            res.redirect('/usuarios/ingresar')
        }
    
    },
    registrarse: function(req,res){
        if(req.session.usuario == undefined){
            res.render('register')
        }else{
            res.redirect('/')
        }
    },
    crear: function(req,res){
        let {Email,usuario,password,Fecha,Documento,Foto} = req.body
        db.Usuarios.findOne({
            where:{
                emial : Email
            }
        })
        if(Email == ""){
            let errors = {}
                errors.message = "email no puede estar vacio"
                res.locals.errors = errors
                res.render('register')

            }else if (password == "" || password.length <3){
                let errors = {}
                errors.message = "Contraseña invalida"
                res.locals.errors = errors
                res.render('register')
            }
            else{
                let contra_encriptada = bcrypt.hashSync(password,12) 
                db.Usuarios.create({
                    emial: Email,
                    nombre: usuario,
                    password:contra_encriptada,
                    fecha_de_nacimiento: Fecha,
                    dni: Documento,
                    foto_de_perfil: Foto
        })
        .then(function(data){

            res.redirect('/usuarios/ingresar')

        })
        .catch(function(err){
            console.log(err)
            if(err.name = 'SequelizeUniqueConstraintError'){
                let errors = {}
                errors.message = "ya existe un usuario con este email"
                res.locals.errors = errors
                res.render('register')
            }
        })
        

    }
}
}


module.exports = controlador;
