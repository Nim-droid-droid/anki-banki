// to make the routes work
const express = require("express");
// express's Router method that allows us to connect things together
const router = express.Router()
// this is the Controller where i store all the logic related to homepage
const homeController = require("../controllers/home")


// A ROUTE NEEDS TO BE CREATED FOR EACH ACTION: to GET a page, to POST, to DELETE etc

// this route triggers soon as a GET/read req is made to "/"/homepage/root page
// soon as user visits localhost:3000/ display the homepage
// read
router.get('/', homeController.getIndex)

router.get("/about", homeController.getAbout)

// router.get("/mybank", homeController.getMyBank)

// router.get("/resources", homeController.getResources)

// router.get("/help", homeController.getHelp)
router.get("/login", homeController.getLogin)




// all the routes for the homepage 
  // get those PUT GET POST DELETE request from / if we know what type of req it is we can pass it off to the right Controller (the REST/CRUD API in that Controller will know what to do - itll either hand stuff off to EJS & render the View or talk to the Model which then goes & talks to the DB)
// GET
// PUT
// DELETE (no need to worry about this ATM)
  // /
  // /about
  // /resource
  // /help


// POST/create req for adding a new item to DB (but since adding cards isnt MVP DW about this)
// when user makes a POST request to this URL /newcard, we go to the newcardController & use/execute the createCard method from that Controller file.
// router.post("/newcard", newcardController.createCard)


// app.get("/logout")

module.exports = router;