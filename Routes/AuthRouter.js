const router = require('express').Router()
const AuthController = require('../Controllers/AuthController.js')
router.post('/Register',AuthController.Registration)
router.post('/Login',AuthController.Login);
router.post('/LogOut',AuthController.LogOut);
router.post('/RefreshToken',AuthController.GenerateAccessToken)
module.exports = router