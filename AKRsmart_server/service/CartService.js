const db = require('../models');

class CartService {
    static async addServiceToCart(userId, serviceId) {
        // une ligne de la table cart est créée avec le userId et le serviceId
        const cart = await db.Cart.create({ userId: userId, serviceId: serviceId });
        return cart;
    }

    static async getCartByUserId(userId) {
        // on récupère le panier de l'utilisateur
        const cart = await db.Cart.findAll({ where: { userId: userId } });
        return cart;
    }

    static async deleteServiceFromCart(userId, serviceId) {
        // on supprime le service du panier de l'utilisateur
        const cart = await db.Cart.destroy({ where: { userId: userId, serviceId: serviceId } });
        return cart;

    }

   static async deleteCartByUserId(userId) {
        // on supprime le panier de l'utilisateur
        const cart = await db.Cart.destroy({ where: { userId: userId } });
        return cart;
    }

    static async getCartByUserIdAndServiceId(userId, serviceId) {
        // on récupère le panier de l'utilisateur
        const cart = await db.Cart.findAll({ where: { userId: userId, serviceId: serviceId } });
        return cart;
    }

    //all services in cart by user id in service type
    static async getAllServicesInCartByUserId(userId)
    {
        const cart = await db.Cart.findAll({ where: { userId: userId } });
        const serviceIds = cart.map(cart => cart.serviceId);
        console.log(serviceIds);
        const services = await db.Service.findAll({ where: { id: serviceIds } });
        return services;

    }



}

module.exports = CartService;