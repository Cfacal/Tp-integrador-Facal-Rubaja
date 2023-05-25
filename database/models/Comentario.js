module.exports = function (sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true, 
            type: dataType.INTEGER
        }, 
        comentario: {
            type: dataType.STRING,
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
        tableName: 'comentarios', 
        timestamps: true, 
        underscored: true
    }
    
    let Comentarios = sequelize.define(alias, cols, config);
    return Comentarios