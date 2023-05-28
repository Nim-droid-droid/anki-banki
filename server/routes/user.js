const express = require("express");
const router = express.Router()
const userController = require("../controllers/user")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/login', userController.getLogin)
router.post('/login', userController.postLogin)
router.post('/logout', userController.logout)
router.get('/signup', userController.getSignup)
router.post('/signup', userController.postSignup)
router.get("/auth/google", userController.google)
router.get("/auth/google/callback", userController.googleCallback)

router.get('/account', ensureAuth, userController.getAccount)
router.post('/account/delete', ensureAuth, userController.deleteUser)

module.exports = router