module.exports = function (sequelize, dataTypes){
    let alias = "Usuarios";
    let cols = {
        id: {
            autoIncrement: true, 
            primaryKey: true, 
            type: dataTypes.INTEGER
        }, 
        nombre: {
            type: dataTypes.STRING(25),
            notNull: true 
        }, 
        emial: {
            type: dataTypes.STRING(100),
            notNull: true,
            unique: true 
      
        },
        password: {
            type: dataTypes.STRING,
            notNull: true
        },
        foto_de_perfil: {
            type: dataTypes.STRING(300)
        },
        dni: {
            type: dataTypes.INTEGER, 
            notNull: true, 
            unique: true
        },
        fecha_de_nacimiento: {
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
        tableName: 'usuarios', 
        timestamps: true, 
        underscored: true
    }
    
    let usuarios = sequelize.define(alias, cols, config);
    usuarios.associate= function(models){
        usuarios.hasMany(models.Productos,{
            as:'usuario_producto',
            foreignKey:'usuario_id'
        }),
        usuarios.hasMany(models.Comentarios,{
            as:'usuario_comentario',
            foreignKey:'usuario_id'
        })

    }
    
    return usuarios
}