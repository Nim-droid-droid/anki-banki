const express = require("express");
const router = express.Router()
// replace this with Twitter controller
const homeController = require("../controllers/home")
const passport = require('passport');


// twitter route testing 
// auth login
router.get("/login", homeController.getLogin)

// auth logout
router.get("/logout", homeController.getLogout)

// Authenticate with Twitter
// router.get('/auth/twitter', homeController.getTwitterLogin)
// router.get('/auth/twitter/callback', homeController.getLogout);

router.get('/twitter', homeController.getTwitter);

router.get('/twitter/callback', homeController.getTwitterAuth)

module.exports = router;