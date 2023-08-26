var express = require('express');
var router = express.Router();
const ServiceController = require('../Controlleurs/ServiceControlleur');

/* GET users listing. */
router.get('/services', ServiceController.getAllServices);
/**
 * @swagger
 * /services:
 *   get:
 *     tags:
 *      - Services
 *     description: Use to request all services
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
router.get('/services/:id', ServiceController.getServiceById);
/**
 * @swagger
 * /services/{id}:
 *   get:
 *     tags:
 *      - Services
 *     description: Use to request one service
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The service id
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 *       '404':
 *         description: Service not found
 */
router.post('/services', ServiceController.createService);
/**
 * @swagger
 * /services:
 *   post:
 *     tags:
 *     - Services
 *     description: Use to create a service
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Service object that needs to be added
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - description
 *             - price
 *             - image
 *           properties:
 *             name:
 *               type: string
 *               description: Nom du service
 *             description:
 *               type: string
 *               description: Description du service
 *             price:
 *               type: integer
 *               format: int32
 *               description: Prix du service
 *             image:
 *               type: string
 *               description: URL de l'image ou chemin
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 *       '404':
 *         description: Service not found
 *       '400':
 *         description: Bad request
 */

router.put('/services/:id', ServiceController.updateService);
/**
 * @swagger
 * /services/{id}:
 *   put:
 *     tags:
 *      - Services
 *     description: Use to update a service
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The service id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The service name
 *               description:
 *                 type: string
 *                 description: The service description
 *               price:
 *                 type: number
 *                 description: The service price
 *               image:
 *                 type: string
 *                 description: The service image
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 *       '404':
 *         description: Service not found
 *       '400':
 *         description: Bad request
 */
router.delete('/services/:id', ServiceController.deleteService);
/**
 * @swagger
 * /services/{id}:
 *   delete:
 *     tags:
 *       - Services
 *     description: Use to delete a specific service
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the service to delete
 *     responses:
 *       '200':
 *         description: Service deleted successfully
 *       '400':
 *         description: Bad request (e.g., invalid ID format)
 *       '404':
 *         description: Service not found
 *       '500':
 *         description: Internal server error
 */

router.post('/services/:id/subservices', ServiceController.createSubService);
/**
 * @swagger
 * /services/{id}/subservices:
 *   post:
 *     tags:
 *       - SubServices
 *     description: Use to create a new subservice under a specific service
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the parent service
 *       - name: subservice
 *         in: body
 *         description: Details of the subservice to be created
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - description
 *             - price
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the subservice
 *             description:
 *               type: string
 *               description: A detailed description of the subservice
 *             price:
 *               type: number
 *               description: The price of the subservice
 *     responses:
 *       '201':
 *         description: Subservice created successfully
 *       '400':
 *         description: Bad request (e.g., missing required fields)
 *       '500':
 *         description: Internal server error
 */

router.get('/services/:parentId/subservices/', ServiceController.getSubServicesByParentId);
/**
 * @swagger
 * /services/{serviceId}/subservices/:
 *   get:
 *     tags:
 *       - SubServices
 *     description: Get all subservices under a specific service
 *     parameters:
 *       - name: serviceId
 *         in: path
 *         required: true
 *         type: integer
 *         description: The ID of the parent service
 *     responses:
 *       '200':
 *         description: A list of subservices
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/SubService'
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Service not found
 *       '500':
 *         description: Internal server error
 *
 * definitions:
 *   SubService:
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       price:
 *         type: number
 */

module.exports = router;