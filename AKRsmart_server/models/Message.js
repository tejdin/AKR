const {Sequelize, DataTypes,Model} = require('sequelize');
module.exports = sequelize => {
    class Message extends Sequelize.Model {
        static associate(models) {
            // define association here
            Message.belongsTo(models.User, { as: 'Sender', foreignKey: 'senderId' });
            Message.belongsTo(models.User, { as: 'Receiver', foreignKey: 'receiverId' });
            Message.belongsTo(models.LineOrder, { foreignKey: 'OrderLineId' });
        }


    }
    Message.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        message: {
            type: DataTypes.STRING,
        }

    }, { sequelize, modelName: 'Message' });
    return Message;
};