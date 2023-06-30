// Load .env config
require('dotenv').config({ path: "./config/.env" });

const express = require('express')
const session = require("express-session")
const passport = require('passport')
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')

// Initialize Express
const app = express()

// Template engine config
app.set('views', path.join(__dirname, '../client/views'))
app.set("view engine", "ejs")

// Connect to DB
const { connectDB } = require('./config/database')
connectDB()

// Config auth (passport) and sessions
require("./config/passport")(passport)
let sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
   client: mongoose.connection.getClient(),
  }),
  cookie: {}
}

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1)
  sess.cookie.secure = true
}

// Middleware
app.use(express.static("public"))
app.use(session(sess))
app.use(require("flash")())
app.use(passport.initialize())
app.use(passport.session())

// Enable express request url and body parsing
app.use(express.urlencoded({extended: true}) )
app.use(express.json())

// Router(s) config
app.use('/', require("./routes/main"))
app.use("/", require("./routes/user"))

const PORT = 8000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Starting server on port ${PORT} in ${process.env.NODE_ENV} mode`);
})