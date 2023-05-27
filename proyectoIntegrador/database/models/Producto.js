module.exports = function (sequelize, dataTypes){
    let alias = "Producto";
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
        // foto_del_producto: acá tendriamos que cambiar la tabla en sql para que acepte fotos
        fecha_de_carga: {
            type: dataTypes.DATE,
            notNull: true 
        }, 
        createdAt: {
            type: dataTypes.DATE
        }, 
        UpdatedAt: {
            type: dataTypes.DATE
        }, 
        DeletedAt: {
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
        Productos.belongsTo(models.Usuario,{
            as:'usuario_producto',
            foreignKey:'usuario_id'

        }),
        Productos.hasMany(models.Comentario,{
            as:'comentario_producto',
            foreignKey:'producto_id'
        })
    }
    return Productos
}