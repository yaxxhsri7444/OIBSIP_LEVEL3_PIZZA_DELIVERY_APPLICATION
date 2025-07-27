const express = require('express');
const router = express.Router();
const { updateIngredient, getLowStock, getAllOrders } = require('../controllers/adminController');
const { verifyToken } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/roleMiddleware');

router.put('/ingredient', verifyToken, isAdmin, updateIngredient);
router.get('/low-stock', verifyToken, isAdmin, getLowStock);
router.get('/orders', verifyToken, isAdmin, getAllOrders);

module.exports = router;