
const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')


router.post('/User', userController.createUser)
router.post('/login', userController.createLogin)
router.post('/signup', userController.createSignup)
router.get('/getData/:userId', userController.getUserData)
router.put('/updateData/:userId', userController.updatedUserData)


module.exports = router
