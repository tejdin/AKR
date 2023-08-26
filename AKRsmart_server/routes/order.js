var express = require('express');
const OrderControlleur = require('../Controlleurs/OrderControlleur');
var router = express.Router();


router.post('/users/:userId/orders', OrderControlleur.createOrderWithLineOrders);
router.get('/users/:userId/lineorders', OrderControlleur.getAllLineOrderwithServiceNameByuserId);



module.exports = router;
