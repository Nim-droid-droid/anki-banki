// bring in the stuff u downloaded for the prj. Unless u bring in express u cant use it even though its downloaded
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
// const dotenv = require('dotenv')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const connectDB = require('./config/database')
const PORT = 8000

const app = express()



//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });


// Connect to DB
connectDB()

// Middleware
  //Using EJS for views
app.set("view engine", "ejs")
  // put static files in public folder
app.set(express.static("public"))
  // Body parsing: parse user req/user input from form that comes in URL & extact/extend that data from URL so we can use it
app.use(express.urlencoded({extended: true}) )

// Routes

// start Server
// at port 8000 listen for input from user (we use morgan to log these req into console)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))