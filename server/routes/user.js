const express = require("express");
const router = express.Router()
const userController = require("../controllers/user")
const auth = require("../middleware/auth");

router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/signup', userController.signup)

router.get('/account', auth.check, userController.getAccount)
router.post('/account/delete', auth.check, userController.deleteUser)

module.exports = router