// All the Controllers related to the bank
// add/link in the API with the questions?
const data = require("../models/index")

module.exports = {
  getMyBank : async (req, res) => {
    res.render("myBank")
    // try{
    //   // grab all post/Doc stored for user & render
    //   const post = await 
    //   res.render("myBank")
    // }catch (err){
    //   console.log(`This is the Error: ${err}`)
    // }
  }
}