const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
// bring in the Controllers
const bankController = require("../controllers/bank")

// const { ensureAuth, ensureGuest } = require("../middleware/auth");

const auth = require("../middleware/auth");
/*is auth Neis version of ensureAuth?
module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  }
 */

// router.get("/:deckName", auth, bankController.getPost)
// testing
router.get("/:deckName", bankController.getPost)

//update/input answers
router.put("/updatePost/:deckName", bankController.updatePost);

// delete question + answer (card)
// router.delete("/deletePost/:deckName", bankController.deletePost);

// add question + answer (card)
router.post("/createPost/:deckName", upload.single("file"), bankController.createPost);



//// instead of
  // /technicalquestions/html
  // /technicalquestions/css
  // /technicalquestions/js

module.exports = router;