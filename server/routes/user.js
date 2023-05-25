const express = require("express");
const router = express.Router()
const userController = require("../controllers/user")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post('/login', ensureGuest, userController.login)
router.post('/logout', ensureAuth, userController.logout)
router.post('/signup', ensureGuest, userController.signup)

router.get('/account', ensureAuth, userController.getAccount)
router.post('/account/delete', ensureAuth, userController.deleteUser)

module.exports = router