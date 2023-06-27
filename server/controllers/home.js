// all logic for Controller related to home page
// writing out the logic to talk to my DB via the Model to get the stuff to put on homepage

// grab the models
const data = require("../models/Index")
const passport = require('passport')

// this file exports this obj that has all these methods tied to an async AF e.g. getIndex
module.exports = {
  // display the stuff on the homepage/render homepage
  getIndex : async(req, res) => {
    // views > layouts > main.ejs
    res.render("main")
    // res.send("Home")
   //When we try to go find our data
    try{
      // go into the models Model to talk to the DB through Model & find the necessary data. The Model sends the data the Controller asked for, back to the Controller. 
      const datas = await data.find()

    } catch(err){
      // if theres an error, return status 500 (Internal Server Error) then send the error so itll display in browser exactly what the error is.
        if(err) return res.status(500).send(err)
    }
  },
  // getMyBank : async (req, res) => {
  //   try{
  //     // grab all post/Doc stored for user & render
  //     const post = await 
  //     res.render("myBank")
  //   }catch (err){
  //     console.log(`This is the Error: ${err}`)
  //   }
  // },
  getAbout : async(req, res) => {
    res.send("about")
  },

// Twitter
  getLogin : async(req, res) => {
    res.render("login")
    // res.send("Login")
  },
  getTwitter : async(req, res, next) => {
    // res.send('Tweet')
    // handle with passport
    passport.authenticate('twitter', {scope: ['profile']})
    (req,res, next)
  },
  // callback
  getTwitterAuth : async(req,res) =>{
    passport.authenticate("twitter", {
      failureRedirect: "/login",
      successRedirect: "/logout",
      failureFlash: "Invalid Twitter credentials"
    })
    (req, res)
  },

  getLogout : async(req, res) => {
    // res.render("Login")
    res.send("Logout")
    // handle with passport
  },

  
  getResources : async(req, res) => {
    res.render("resources")
  },
  getHelp : async(req, res) =>{
    res.render("help")
  },
  createCard : async(req, res) => {

  }
}