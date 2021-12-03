module.exports = ( sequelize, DataTypes ) => {
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        matricula: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        nombres: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        primer_apellido: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        segundo_apellido: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        // Configurar con los
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },

        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },

        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }

    const config = {
        timestamps: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    }
    const RchEmpleado = sequelize.define("RchEmpleado", cols, config);
    return RchEmpleado;
}