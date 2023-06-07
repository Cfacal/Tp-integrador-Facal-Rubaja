const productos = require("../data/data")
const db = require('../database/models/index')
let op = db.Sequelize.Op

const controlador = {
    detalle: function(req,res){
        let id = req.params.id
        let navegador = req.session.usuario.id
        db.Productos.findByPk(id,{include:[{association: 'usuario_producto'}]})
        .then(function(data){
            res.render('product', {productos: data, comentarios: productos.comentarios, navegador: navegador})
        })
    },
    agregar: function(req,res){
        if(req.session.usuario != undefined){
            res.render('product-add')
        }else{
            res.redirect('/')
        }
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
                'search-results', {busqueda: busquedaUsuario, resultados: data, resultadosEncontrados: resultadosEncontrados, comentarios: productos.comentarios }
                // lo de comentarios es solo momentaneamente para que no rompa la página --> después hay que completarlo con lo que dice la consigna 10
            )
        }).catch(function(error){
            console.log(error)
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
}
}

module.exports = controlador;