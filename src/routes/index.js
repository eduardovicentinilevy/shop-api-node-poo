const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const ProductController = require('../controllers/ProductController');
const OrderController = require('../controllers/OrderController');
const { verifyToken, verifyAdmin } = require('../middleware/auth');


router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/products', ProductController.listAll);


router.post('/products', verifyToken, verifyAdmin, ProductController.create);


router.post('/checkout', verifyToken, OrderController.checkout);

module.exports = router;