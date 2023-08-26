const {Sequelize, DataTypes} = require('sequelize');

module.exports = sequelize => {
class LineOrder extends Sequelize.Model {
    static associate(models) {
        // define association here
        LineOrder.belongsTo(models.Order, {foreignKey: 'orderId'});
        LineOrder.belongsTo(models.Service, {foreignKey: 'serviceId'});

    }
}
    LineOrder.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.ENUM('En attente', 'En cours', 'Terminé'),
            allowNull: false,
            defaultValue: 'En attente'
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, { sequelize, modelName: 'LineOrder' });
    return LineOrder;
}