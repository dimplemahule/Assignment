
const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const productController = require('../controller/productController')
const middleware = require("../middleware/middleware")

//************User API********/

router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)

//*********Product API********/
router.post('/product', middleware.authenticate,middleware.authorization, productController.createProduct)
router.get('/product/:userId', middleware.authenticate,middleware.authorization, productController.getUserData)
router.put('/product/:userId', middleware.authenticate,middleware.authorization, productController.updateProducts)
router.delete('/products/:userId', middleware.authenticate,middleware.authorization, productController.deleteProducts);


module.exports = router
