const CartService = require('../service/CartService');



class CartController {

        static async addServiceToCart(req, res) {
            const userId = req.params.userId;
            const serviceId = req.params.serviceId;
            const cart = await CartService.addServiceToCart(userId, serviceId);
            res.json(cart);
        }

       static async getCartByUserId(req, res) {
            const userId = req.params.userId;
            const cart = await CartService.getCartByUserId(userId);
            res.json(cart);
        }

       static async deleteServiceFromCart(req, res) {
            const userId = req.params.userId;
            const serviceId = req.params.serviceId;
            const cart = await CartService.deleteServiceFromCart(userId, serviceId);
            res.json(cart);
        }


        static async deleteCartByUserId(req, res) {
            const userId = req.params.userId;
            const cart = await CartService.deleteCartByUserId(userId);
            res.json(cart);
        }

        static async getCartByUserIdAndServiceId(req, res) {
            const userId = req.params.userId;
            const serviceId = req.params.serviceId;
            const cart = await CartService.getCartByUserIdAndServiceId(userId, serviceId);
            res.json(cart);
        }

        static async getAllServicesInCartByUserId(req, res) {
            const userId = req.params.userId;
            console.log(userId);

            const services = await CartService.getAllServicesInCartByUserId(userId);
            res.json(services);
        }



}

module.exports = CartController;