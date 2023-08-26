var express = require('express');
const UserController = require('../Controlleurs/UserControlleur');
var router = express.Router();

/* GET users listing. */
/**
 * @swagger
 * /users:
 *   get:
 *     description: Use to request all users
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */

router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getOne);
router.post('/users', UserController.register);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);
router.post('/users/login', UserController.login);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Use to request one user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The user id
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     description: Use to request all users
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     description: Use to register user
 *     parameters:
 *       - name: firstName
 *         in: body
 *         required: true
 *         type: string
 *         description: The user firstName
 *       - name: lastName
 *         in: body
 *         required: true
 *         type: string
 *         description: The user lastName
 *       - name: email
 *         in: body
 *         required: true
 *         type: string
 *         description: The user email
 *       - name: password
 *         in: body
 *         required: true
 *         type: string
 *         description: The user password
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     description: Use to update one user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The user id
 *       - name: firstName
 *         in: body
 *         required: true
 *         type: string
 *         description: The user firstName
 *       - name: lastName
 *         in: body
 *         required: true
 *         type: string
 *         description: The user lastName
 *       - name: email
 *         in: body
 *         required: true
 *         type: string
 *         description: The user email
 *       - name: password
 *         in: body
 *         required: true
 *         type: string
 *         description: The user password
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Use to delete one user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         description: The user id
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 *       '404':
 *         description: User not found
 */

// login docs
/**
 * @swagger
 * /users/login:
 *   post:
 *     tags:
 *       - Users
 *     description: Use to login
 *     parameters:
 *       - name: email
 *         in: body
 *         required: true
 *         type: string
 *         description: The user email
 *       - name: password
 *         in: body
 *         required: true
 *         type: string
 *         description: The user password
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 *       '404':
 *         description: User not found
 */


module.exports = router;
