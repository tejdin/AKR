const db=require('../models');

class OrderService {

   static async createOrderWithLineOrders(userId, price) {
        const cartItems = await db.Cart.findAll({ where: { userId: userId } });

        if (cartItems.length === 0) {
            throw new Error("Cart is empty");
        }

        const serviceIds = cartItems.map(item => item.serviceId);
        const order = await db.Order.create({ userId: userId });
        const lineOrders = [];

        for (const serviceId of serviceIds) {
            const service = await db.Service.findByPk(serviceId);
            const lineOrder = await db.LineOrder.create({
                status: 'En attente'    ,
                price: service.price
            });

            await lineOrder.setOrder(order);
            await lineOrder.setService(service);
            lineOrders.push(lineOrder);
        }

        await db.Cart.destroy({ where: { userId: userId } });

        return { order, lineOrders };
    }

    async getOrdersByUserId(userId) {
        const orders = await db.Order.findAll({ where: { userId: userId } });
        return orders;
    }

    async getLineOrdersByOrderId(orderId) {
        const lineOrders = await db.LineOrder.findAll({ where: { orderId: orderId } });
        return lineOrders;
    }

    async updateLineOrderStatus(lineOrderId, status) {
        const lineOrder = await db.LineOrder.findByPk(lineOrderId);
        lineOrder.status = status;
        await lineOrder.save();
        return lineOrder;
    }
    static async getAllLineOrderwithServiceNameByuserId(userId) {
        try {
            const orders = await db.Order.findAll({ where: { userId: userId } });

            if (!orders.length) {
                return [];
            }

            const orderIds = orders.map(order => order.id);

            const lineOrders = await db.LineOrder.findAll({ where: { orderId: orderIds } });

            if (!lineOrders.length) {
                return [];
            }

            const serviceIds = lineOrders.map(lineOrder => lineOrder.serviceId);

            const services = await db.Service.findAll({ where: { id: serviceIds } });

            const result = lineOrders.map(lineOrder => {
                const service = services.find(s => s.id === lineOrder.serviceId);
                return {
                    id: lineOrder.id,
                    serviceName: service ? service.name : 'Inconnu',
                    status: lineOrder.status,
                };
            });

            return result;

        } catch (error) {
            console.error('Erreur:', error);
            return null;
        }
    }






}

module.exports = OrderService;
