module.exports = function (sequelize, dataTypes){
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true, 
            type: dataType.INTEGER
        }, 
        nombre: {
            type: dataType.STRING(50),
            notNull: true 
        }, 
        descripcion: {
            type: dataType.STRING,
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
    return Productos
}