// all logic for Controller related to home page
// writing out the logic to talk to my DB via the Model to get the stuff to put on homepage

// grab the models
const data = require("../models/index")


module.exports = {
  // display the stuff on the homepage/render homepage
  getIndex : async(req, res) => {
    res.render("main")
   //When we try to go find our data
    try{
      // go into the models Model to talk to the DB through Model & find the necessary data. The Model sends the data the Controller asked for, back to the Controller. 
      const datas = await data.find()

    } catch(err){
      // if theres an error, return status 500 (Internal Server Error) then send the error so itll display in browser exactly what the error is.
        if(err) return res.status(500).send(err)
    }
  },
  createCard : async(req, res) => {

  }
}