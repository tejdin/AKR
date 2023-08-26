const db = require('../models');

class MessageService {
    // Créer un nouveau message
    async createMessage(senderId, receiverId, OrderLineId, message) {
        try {
            const newMessage = await db.Message.create({
                senderId,
                receiverId,
                OrderLineId,
                message,
            });
            return newMessage;
        } catch (error) {
            console.error('Erreur lors de la création du message:', error);
            throw error;
        }
    }

    // Récupérer un message par ID
    async getMessageById(id) {
        try {
            const message = await db.Message.findByPk(id);
            return message;
        } catch (error) {
            console.error('Erreur lors de la récupération du message par ID:', error);
            throw error;
        }
    }

    // Récupérer tous les messages
    async getAllMessages() {
        try {
            const messages = await db.Message.findAll();
            return messages;
        } catch (error) {
            console.error('Erreur lors de la récupération de tous les messages:', error);
            throw error;
        }
    }

    // Récupérer tous les messages associés à un OrderLineId particulier
    async getMessagesByOrderLineId(OrderLineId) {
        try {
            const messages = await db.Message.findAll({
                where: {
                    OrderLineId,
                },
            });
            return messages;
        } catch (error) {
            console.error('Erreur lors de la récupération des messages par OrderLineId:', error);
            throw error;
        }
    }
}

module.exports = new MessageService();
