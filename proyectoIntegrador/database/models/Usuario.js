module.exports = function (sequelize, dataTypes){
    let alias = "Usuario";
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
        contraseña: {
            type: dataTypes.STRING(200),
            notNull: true
        },
        // foto_de_perfil: acá tendriamos que cambiar la tabla en sql para que acepte fotos
        dni: {
            type: dataTypes.INTEGER, 
            notNull: true, 
            unique: true
        },
        fecha_de_nacimiento: {
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
        tableName: 'usuarios', 
        timestamps: true, 
        underscored: true
    }


    
    let usuarios = sequelize.define(alias, cols, config);
    usuarios.associate= function(models){
        usuarios.hasMany(models.Producto,{
            as:'usuario_producto',
            foreignKey:'usuario_id'
        }),
        usuarios.hasMany(models.Comentario,{
            as:'usuario_comentario',
            foreignKey:'usuario_id'
        })

    }
    
    return usuarios
}