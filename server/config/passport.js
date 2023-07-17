const LocalStrategy = require("passport-local").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy
const TwitterStrategy  = require('passport-twitter').Strategy;
const mongoose = require("mongoose")
const User = require("../models/User")

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
      done(null, user.id)
  })

  passport.deserializeUser(async(req, id, done) => {
        const user = await User.findById(id)
        done(null, user)
  })
  passport.use("local", new LocalStrategy({ usernameField: "username" },
      async(email, password, done) => {
          const user = await User.findOne({ email: email.toLowerCase() })
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
      try {
        // Get first email from emails array in profile if one exists
        // let emails = profile?.emails
        // let email = emails && emails.length > 0 ? emails[0].value : undefined
        let email = profile.emails[0].value

        const googleUser = {
          googleId: profile.id,
          username: profile.username || profile.displayName,
          email: email,
        }

        // Find existing User by googleId if one exists, otherwise create a new User
        let user = await User.findOneAndUpdate({ googleId: profile.id }, googleUser, { upsert: true })
        done(null, user)
      } catch (err) {
        console.error(err)
      }
    })
  )

  passport.use("twitter", new TwitterStrategy({
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: process.env.TWITTER_CALLBACK_URL
    },   
    async (accessToken, tokenSecret, profile, done) => {
      // You can customize how you handle the user profile data here
      // The "profile" parameter contains the user information obtained from Twitter
      try {

        const twitterUser = {
          twitterId: profile.id,
          username: profile.username || profile.displayName,
          email: `${profile.username}@twitter.com`,
          // Fake twitter email since Twitter doesn't provide an email
          // Twitter usernames are guaranteed to be unique
        }
        let user = await User.findOneAndUpdate({ twitterId: profile.id }, twitterUser, { upsert: true })
        done(null, user)
      } catch (err) {
        console.err(err)
      }
    }
  ))
}