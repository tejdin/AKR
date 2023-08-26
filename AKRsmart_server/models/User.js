const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = sequelize => {
class User extends Sequelize.Model {
    static associate(models) {
        // define association here
        User.hasMany(models.Order, { foreignKey: 'userId' });
        User.hasMany(models.Message, { foreignKey: 'userId' });
        User.belongsToMany(models.Service, { through: models.Cart, foreignKey: 'userId' });



    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'client'
    }
}, {
    sequelize,
    modelName: 'User'
});
return User;
};