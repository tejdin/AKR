const OrderService = require('../service/OrderService');

class OrderControlleur {

    static async createOrderWithLineOrders(req, res) {
        const userId = req.params.userId;
        try {
            const order = await OrderService.createOrderWithLineOrders(userId);
            res.json(order);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async getOrdersByUserId(req, res) {
        const userId = req.params.userId;

        try {
            const orders = await OrderService.getOrdersByUserId(userId);
            res.json(orders);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async getLineOrdersByOrderId(req, res) {
        const orderId = req.params.orderId;

        try {
            const lineOrders = await OrderService.getLineOrdersByOrderId(orderId);
            res.json(lineOrders);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async updateLineOrderStatus(req, res) {
        const lineOrderId = req.params.lineOrderId;
        const status = req.body.status;

        try {
            const lineOrder = await OrderService.updateLineOrderStatus(lineOrderId, status);
            res.json(lineOrder);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async getAllLineOrderwithServiceNameByuserId(req, res) {
        const userId = req.params.userId;

        try {
            const lineOrders = await OrderService.getAllLineOrderwithServiceNameByuserId(userId);
            res.json(lineOrders);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

}

module.exports = OrderControlleur;