const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {
class Order extends Sequelize.Model {
    static associate(models) {
        // define association here
    }
}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    sequelize,
    modelName: 'Order'
});
return Order;

};