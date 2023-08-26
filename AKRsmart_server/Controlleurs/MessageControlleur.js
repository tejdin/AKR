const MessageService = require('../service/MessageService'); // Chemin à adapter

class MessageController {
    async createMessage(req, res) {
        try {
            const { senderId, receiverId, OrderLineId, message } = req.body;
            const newMessage = await MessageService.createMessage(senderId, receiverId, OrderLineId, message);
            res.status(201).json(newMessage);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getMessageById(req, res) {
        try {
            const { id } = req.params;
            const message = await MessageService.getMessageById(id);
            res.status(200).json(message);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllMessages(req, res) {
        try {
            const messages = await MessageService.getAllMessages();
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getMessagesByOrderLineId(req, res) {
        try {
            const { OrderLineId } = req.params;
            const messages = await MessageService.getMessagesByOrderLineId(OrderLineId);
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new MessageController();
