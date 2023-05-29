module.exports = function (sequelize, dataTypes){
    let alias = "Comentarios";
    let cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true, 
            type: dataTypes.INTEGER
        }, 
        comentario: {
            type: dataTypes.STRING,
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
        tableName: 'comentarios', 
        timestamps: true, 
        underscored: true
    }
    
    let Comentarios = sequelize.define(alias, cols, config)
    Comentarios.associate= function(models){
        Comentarios.belongsTo(models.Usuarios,{
            as:'usuario_comentario',
            foreignKey:'usuario_id'
        }),
        Comentarios.belongsTo(models.Productos,{
            as:'comentario_producto',
            foreignKey:'producto_id'
        })
    }
return Comentarios
}