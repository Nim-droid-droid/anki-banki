const express = require("express");
const router = express.Router()
const userController = require("../controllers/user")

router.post('/login', userController.postLogin)
router.post('/logout', userController.logout)
router.post('/signup', userController.signup)

router.get('/account', userController.getAccount)
router.post('/account/delete', userController.deleteUser)

module.exports = router