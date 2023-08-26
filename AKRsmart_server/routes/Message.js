const express = require('express');
const router = express.Router();
const MessageController = require('../Controlleurs/MessageControlleur'); // Chemin à adapter

router.post('/message/', MessageController.createMessage);
router.get('/message/:id', MessageController.getMessageById);
router.get('/message/', MessageController.getAllMessages);
router.get('/message/orderline/:OrderLineId', MessageController.getMessagesByOrderLineId);

module.exports = router;
