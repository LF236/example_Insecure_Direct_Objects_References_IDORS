module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(100),
            allowNull: true
        },

        tarjetaCredito: {
            type: DataTypes.STRING(100),
            allowNull: true
        },

        fechaFinTarjetar: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    };

    const config = {
        timestamps: false,
        tableName: 'InfoEmpleado'
    }

    const InfoEmpleado = sequelize.define("InfoEmpleado", cols, config);
    return InfoEmpleado;
}