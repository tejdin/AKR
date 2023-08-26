const {Sequelize, DataTypes} = require('sequelize');

module.exports = sequelize => {
class Cart extends Sequelize.Model {
    static associate(models) {
        // define association here
        Cart.belongsTo(models.User, {foreignKey: 'userId'});

    }
}
    Cart.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
        }
    }, { sequelize, modelName: 'Cart' });
    return Cart;
}