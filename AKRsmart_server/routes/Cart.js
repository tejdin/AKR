var express = require('express');
var router = express.Router();

const CartController = require('../Controlleurs/CartControlleur');


router.post('/users/:userId/cart/:serviceId', CartController.addServiceToCart);

router.get('/users/:userId/cart', CartController.getCartByUserId);

router.delete('/users/:userId/cart/:serviceId', CartController.deleteServiceFromCart);

router.get('/users/:userId/cart/services', CartController.getAllServicesInCartByUserId);


router.delete('/users/:userId/cart', CartController.deleteCartByUserId);
/**
 * @swagger
 * /users/{userId}/cart/{serviceId}:
 *   post:
 *     tags:
 *       - Cart
 *     description: Add a service to the user's cart
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         type: integer
 *         description: The user's ID
 *       - name: serviceId
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the service to be added
 *     responses:
 *       '200':
 *         description: Service added to cart successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: User or service not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /users/{userId}/cart:
 *   get:
 *     tags:
 *       - Cart
 *     description: Get all services in the user's cart
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         type: integer
 *         description: The user's ID
 *     responses:
 *       '200':
 *         description: A list of services in the cart
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /users/{userId}/cart/{serviceId}:
 *   delete:
 *     tags:
 *       - Cart
 *     description: Delete a specific service from the user's cart
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         type: integer
 *         description: The user's ID
 *       - name: serviceId
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the service to be deleted
 *     responses:
 *       '200':
 *         description: Service removed from cart successfully
 *       '404':
 *         description: User or service not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /users/{userId}/cart:
 *   delete:
 *     tags:
 *       - Cart
 *     description: Delete the entire cart for the user
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         type: integer
 *         description: The user's ID
 *     responses:
 *       '200':
 *         description: Cart deleted successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

module.exports = router;

