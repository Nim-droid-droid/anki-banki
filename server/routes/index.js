const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const postsController = require("../controllers/posts");
// const { ensureAuth } = require("../middleware/auth");


//Main Routes 
router.get("/profile", ensureAuth, postsController.getProfile);

//Routes for user login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;