const LocalStrategy = require("passport-local").Strategy
const mongoose = require("mongoose")
const User = require("../models/User")

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

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser(async(id, done) => {
        const user = await User.findById(id)
        return done(null, user)
    })
}