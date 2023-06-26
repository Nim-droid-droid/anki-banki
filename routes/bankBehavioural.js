const express = require("express");
// express's Router method that allows us to connect things together
const router = express.Router()
// this is the Controller where i store all the logic related to bank page
const bankController = require("../controllers/bank")

router.get("/", bankController.getMyBank)
// router.get("/myBank", homeController.getMyBank)

module.exports = router;