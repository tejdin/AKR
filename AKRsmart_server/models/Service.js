const {Sequelize, DataTypes,Model} = require('sequelize');

module.exports = sequelize => {
class Service extends Sequelize.Model {
    static associate(models) {
        // define association here
        Service.belongsToMany(models.Order, {through:'OrderLine', foreignKey: 'serviceId'});
        Service.belongsToMany(models.User, {through:models.Cart, foreignKey: 'serviceId'});
    }
}
Service.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('Service', 'Sous Service'),
        allowNull: false,

    },
    parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,

    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Service'
});
return Service;
};