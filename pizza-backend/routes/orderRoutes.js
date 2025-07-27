const express = require('express');
const router = express.Router();
const { placeOrder, updateStatus } = require('../controllers/orderController');
const { verifyToken } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/roleMiddleware');

router.post('/place', verifyToken, placeOrder);
router.put('/status', verifyToken, isAdmin, updateStatus);

module.exports = router;
