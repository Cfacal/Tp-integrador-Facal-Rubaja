// const usuarios = require('../data/data')
const bcrypt = require('bcryptjs');
const db = require('../database/models/index')
let op = db.Sequelize.Op

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
        
        if(usuario == ""){
            let errors = {}
                errors.message = "Usuario no puede estar vacio"
                res.locals.errors = errors
                res.render('login')

            }else if (password == ""){
                let errors = {}
                    errors.message = "Contraseña no puede estar vacio"
                    res.locals.errors = errors
                    res.render('login')
            }else {
                db.Usuarios.findOne({
                    where: {
                        emial: usuario
                    }, 
                    raw: true
                })
                .then(function(usuario){
                    if(usuario ==undefined){
                        let errors = {}
                            errors.message = "Usuario no encontrado"
                            res.locals.errors = errors
                            res.render('login')
                    }
                    let verificacionContra = bcrypt.compareSync(password, usuario.password)
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
                        
                    }else{
                        let errors = {}
                        errors.message = "Datos incorrectos"
                        res.locals.errors = errors
                        res.render('login')
                    }
                }).catch(function(error){
                    console.log(error)
                })
            }
        
    },
    editar_perfil: function(req,res){
        if(req.session.usuario != undefined){
            res.render('profile-edit')
        }else{
            res.redirect("/usuarios/ingresar")
        }
    },
    ingresar_perfil: function(req,res){
    //if(req.session.usuario != undefined){
    let id = req.params.id
    db.Usuarios.findByPk(id,{
                include:[
                    {association:'usuario_producto', include: {association: 'comentario_producto'}},{association:'usuario_comentario'}
                ],
                order: [
                    ['created_at', 'DESC']
                ]
            })

            .then(function(data){
                let esLogueado 
                if(req.session.usuario !== undefined){
                    if(req.session.usuario.id !== data.id){
                        esLogueado = false
                    }else{
                        esLogueado = true
                    }
                } else{
                    esLogueado = false
                }
                
                res.render('profile',{infoUsuario:data, esLogueado})
            })
            .catch(function(err){
                console.log(err)
            })
    
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
                errors.message = "Email no puede estar vacio"
                res.locals.errors = errors
                res.render('register')

            }else if (usuario == ""){
                let errors = {}
                    errors.message = "Usuario no puede estar vacio"
                    res.locals.errors = errors
                    res.render('register')
            
            } else if (password == "" || password.length <3){
                let errors = {}
                errors.message = "Contraseña invalida"
                res.locals.errors = errors
                res.render('register')
    
            } else if (Fecha == ""){
                    let errors = {}
                        errors.message = "Fecha no puede estar vacio"
                        res.locals.errors = errors
                        res.render('register')
            } else if (Documento == ''){
                let errors = {}
                        errors.message = "Documento no puede estar vacio"
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
                errors.messageEmail = "ya existe un usuario con este email"
                res.locals.errors = errors
                res.render('register')
            }
        })
        

    }
}, 
buscar: function(req, res){
    let busqueda = req.query.busquedaUsuarios

    db.Usuarios.findAll({
        where: {
            [op.or]: [
                {nombre : { [op.like]: `%${busqueda}%`}},
                {emial: {[op.like]: `%${busqueda}%`}}
            ], 

    },
        order: [
            ['created_at', 'DESC']
        ],
    }).then(function(data){
        console.log(data)
        let resultadosEncontrados

        if(data.length > 0){
            resultadosEncontrados = true
        } else{
            resultadosEncontrados = false
        }
    
        res.render(
            'user-search', {busqueda: busqueda, resultados: data, resultadosEncontrados: resultadosEncontrados }
            
        )
        
       
    }).catch(function(error){
        console.log(error)
    })
}
}


module.exports = controlador;
