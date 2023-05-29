module.exports = function (sequelize, dataTypes){
    let alias = "Productos";
    let cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true, 
            type: dataTypes.INTEGER
        }, 
        nombre: {
            type: dataTypes.STRING(50),
            notNull: true 
        }, 
        descripcion: {
            type: dataTypes.STRING,
            notNull: true
        },
        foto_del_producto: {
            type: dataTypes.STRING(300)
        },
        fecha_de_carga: {
            type: dataTypes.DATE,
            notNull: true 
        }, 
        created_at: {
            type: dataTypes.DATE
        }, 
        updated_at: {
            type: dataTypes.DATE
        }, 
        deleted_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: 'productos', 
        timestamps: true, 
        underscored: true
    }
    
    let Productos = sequelize.define(alias, cols, config);
    Productos.associate=function(models){
        Productos.belongsTo(models.Usuarios,{
            as:'usuario_producto',
            foreignKey:'usuario_id'

        }),
        Productos.hasMany(models.Comentarios,{
            as:'comentario_producto',
            foreignKey:'producto_id'
        })
    }
    return Productos
}