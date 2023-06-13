const productos = require("../data/data")
const db = require('../database/models/index')
let op = db.Sequelize.Op

const controlador = {
    detalle: function(req,res){
        let id = req.params.id
        db.Productos.findByPk(id,
        {
            include:[
                {
                    association: 'comentario_producto',
                    include:
                    {
                        association: 'usuario_comentario'
                    },
                },
                {
                    association: 'usuario_producto'
                }
            ],
            order: [
                ['created_at', 'DESC']
            ]
        })
        .then(function(product){
            let esProductoDelLogueado 
            if(req.session.usuario !== undefined ){
                if(req.session.usuario.id !== product.usuario_id){
                    esProductoDelLogueado = false
                } else {
                    esProductoDelLogueado = true
                }
            } else {
                esProductoDelLogueado = false
            }
            //res.send(product)

            res.render('product', {productos: product, esProductoDelLogueado})
        }).catch(function(error){
            console.log(error)
        })
        
            
    },
    agregar: function(req,res){
        if(req.session.usuario != undefined){
            res.render('product-add')
        }else{
            res.redirect('/')
        }
    },
    editar_producto: function(req,res){
        let id = req.params.id
        db.Productos.findByPk(id)
        .then(function(producto){
            let Logueado 
            if(req.session.usuario !== undefined ){
                if(req.session.usuario.id !== product.usuario_id){
                    Logueado = false
                } else {
                    Logueado = true
                }
            } else {
                Logueado = false
            }
            res.render('product-edit',{
                producto: producto,Logueado
            })
        })
        .catch(function(error){
            console.log(error)
        })
    },
    eliminar_producto: function(req,res){
        let id = req.params.id

        db.Productos.destroy({
            where:{
                id: id
            }
        })
        .then(function(resp){
            res.redirect('/')
        })
        .catch(function(error){
            console.log(error)
        })
    },
    busqueda: function(req,res){
        let busquedaUsuario = req.query.busquedaProductos
        db.Productos.findAll({
            where: {
                [op.or]: [
                    {nombre : { [op.like]: `%${busquedaUsuario}%`}},
                    {descripcion: {[op.like]: `%${busquedaUsuario}%`}}
                ]          
        },
        include:[{association : 'comentario_producto'}
    ],
            order: [
                ['created_at', 'DESC']
            ],
            raw: true
        }).then(function(data){
            console.log(data)
            let resultadosEncontrados

            if(data.length > 0){
                resultadosEncontrados = true
            } else{
                resultadosEncontrados = false
            }
            res.render(
                'search-results', {busqueda: busquedaUsuario, resultados: data, resultadosEncontrados: resultadosEncontrados }
                
            )
        }).catch(function(error){
            console.log(error)
        })
    },
    comentar: function(req, res){
        let usuarioId = req.session.usuario.id
        let productoId = req.params.id
        let {comentario} = req.body 
        db.Comentarios.create({
            usuario_id: usuarioId, 
            producto_id: productoId,
            comentario: comentario
        }).then(function(data){
            res.redirect('/productos/detalle/'+ productoId)
        }).catch(function(err){
            console.log(err)
        })
    },
    add:function(req,res){
        if(req.session.usuario != undefined){
        let usuarioId = req.session.usuario.id
        let {producto,nombre_prod,Descripcion,Fecha} = req.body
        db.Productos.create({
            usuario_id : usuarioId,
            nombre: nombre_prod,
            descripcion: Descripcion,
            foto_del_producto: producto,
            fecha_de_carga: Fecha


        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err)

        })

        }else{
            res.redirect('/usuarios/ingresar')
        }
    },
    editar: function(req,res){
        let id = req.params.id
        let {producto, nombre_prod, Descripcion, Fecha} = req.body

        db.Productos.update({
            nombre: nombre_prod,
            descripcion: Descripcion,
            foto_del_producto: producto,
            fecha_de_carga: Fecha
        },{
            where:{
                id:id
            }
        })
        .then(function(data){
            res.redirect('/productos/detalle/'+ id)
        })
        .catch(function(error){
            console.log(error)
        })

    },
    update: function(req,res){
        let navegador 
        if(req.session.usuario != undefined){
            navegador = req.session.usuario.id
        }else{
            navegador = ""
        }
        let id =req.params.id
        db.Productos.findByPk(id, 
            {include: [{association: 'usuario_producto'}]})
        .then(function(data){
        res.render('product-edit', {
                data:data, navegador: navegador
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

module.exports = controlador;