const exress = require('express');
const router = exress.Router();
const {createPizza,getPizzas,getmyorders} = require('../controllers/pizzaController');
const {verifyToken} = require('../middlewares/authMiddleware');

router.post('/create',verifyToken ,createPizza);

router.get('/myorders', verifyToken, getmyorders);



module.exports = router;
