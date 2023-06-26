// bring in the stuff u downloaded for the prj. Unless u bring in express u cant use it even though its downloaded
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// ****
const passport = require('passport');
// ****
// TO DO FIND SESS KEY & FINISH SESS CODE FOR AUTH
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session)
const morgan = require('morgan');
const connectDB = require('./config/database');
const path = require('path');
const methodOverride = require('method-override');

const indexRouter = require('./routes/main')
const authTwitterRoute = require('./routes/twitter')
// const behaviouralQuestionsRouter = require('./routes/bankBehavioural')
// const bankTechnicalRouter = require('./routes/bankTechnical')

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// ****
// Passport config
require('./config/passport')(passport)
// ****

// Connect to DB
connectDB()

// Middleware
  //Using EJS for views
app.set('views', path.join(__dirname, 'views/layouts'))
app.set("view engine", "ejs")
  // put static files in public folder
app.use(express.static("public"))
  // Body parsing: parse user req/user input from form that comes in URL & extact/extend that data from URL so we can use it
app.use(express.urlencoded({extended: true}) )
app.use(express.json())

// Sessions

// Configure Express session
app.use(session({
  secret: process.env.TWITTER_API_KEY_SECRET,
  resave: false,
  saveUninitialized: false
//store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));


// ****
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
// ****

// Include the Passport configuration

// Routes
app.use('/', indexRouter)
// *****
app.use('/auth', authTwitterRoute)
// ****

// just have 1 route for questions & let query para & api figure out the rest e.g. tech Q > qID23
// /qyestions/?type:?id:
// app.use('/behaviouralquestions', behaviouralQuestionsRouter)
// app.use('/technicalquestions', bankTechnicalRouter)



// start Server
// at port 3000 listen for input from user (we use morgan to log these req into console)
app.listen(process.env.PORT, ()=>{
  console.log(`Server running on port ${process.env.PORT}`)
}) 