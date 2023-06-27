const LocalStrategy = require("passport-local").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy
const TwitterStrategy  = require('passport-twitter').Strategy;
const mongoose = require("mongoose")
const User = require("../models/User")
const GoogleUser = require("../models/GoogleUser")

module.exports = (passport) => {
    passport.use("local", new LocalStrategy({ usernameField: "email", passwordField: "password"},
       async(email, password, done) => {
           const user = await User.findOne({ email })
           if (!user) {
               return done(null, false, { msg: `Email ${email} not found.` })
           }
           if (!user.password) {
               return done(null, false, { msg: "Your account was registered using a sign-in provider. \
                   To enable password login, sign in using a provider, then set a password \
                   under your user profile settings" })
           }
           user.comparePassword(password, (err, isMatch) => {
               if (err) { return done(err) }
               if (isMatch) {
                   return done(null, user)
               }
               return done(null, false, { msg: "Invalid email or password." })
           })
       })
    )

    passport.use("google", new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
          },
          async (accessToken, refreshToken, profile, done) => {
            const newUser = {
              googleId: profile.id,
              displayName: profile.displayName,
              image: profile.photos[0].value,
            }
    
            console.log(newUser)
            try {
              let user = await GoogleUser.findOne({ googleId: profile.id })
    
              if (user) {
                done(null, user)
              } else {
                user = await GoogleUser.create(newUser)
                done(null, user)
              }
            } catch (err) {
              console.error(err)
            }
          }
        )
    )

    passport.use("twitter", new TwitterStrategy({
        // use Twitter API to authenticate users on my app
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: process.env.TWITTER_CALLBACK_URL
      },   
      (token, tokenSecret, profile, done) => {
        // You can customize how you handle the user profile data here
        // The "profile" parameter contains the user information obtained from Twitter
        // You may want to store this information in your database or perform other operations
        return done(null, profile)
      }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async(id, done) => {
        const user = await User.findById(id)
        return done(null, user)
    })
}