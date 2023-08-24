const User = require("../models/User")
const passport = require("passport")
const validator = require("validator")

const getLogin = (req, res) => {
    res.send("Login page")
}

const getSignup = (req, res) => {
    res.send("Signup page")
}

const postLogin = (req, res, next) => {
    const validationErrors = []
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: "Please enter a valid email address." })
    if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: "Password cannot be blank." })

    if (validationErrors.length) {
        req.flash("errors", validationErrors)
        return res.redirect("/login")
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

    passport.authenticate("local", { failureRedirect: "/login", failureMessage: true},
        (err, user, info) => {
            if (err) { return next(err) }
            if (!user) {
                console.log(`Failed login. User: "${req.body.email}" does not exist`)
                return res.redirect("/login")
            }
            req.login(user, (err) => {
                if(err) { return next(err) }
                console.log(`Successful login by: ${user.email}`)
                req.flash("sucess", { msg: "Success! You are logged in ." })
                res.redirect(req.session.returnTo || "/")
            })
        })(req, res, next)
}

const postSignup = async(req, res, next) => {
    const validationErrors = []
    const minPassLength = 8
    // TODO: add stricter password requirements
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: "Please enter a valid email address." })
    if (!validator.isLength(req.body.password, { min: minPassLength })) validationErrors.push({ msg: `Password must be at least ${minPassLength} characters`})
    if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: "Passwords do not match" })

    if (validationErrors.length) {
        req.flash("errors", validationErrors)
        console.log(validationErrors)
        return res.redirect("/signup")
    }

    const { username, email, password } = req.body;

    const user = new User({ username, email, password })

    const existingUser = await User.findOne({$or: [{ email }, { username: username }]})
    if (existingUser) {
        console.log("Can't signup. Account already exists")
        return res.redirect("/signup")
    }
    await user.save()
    req.login(user, (err) => {
        if (err) {
            return next(err)
        }
        res.redirect("/")
    })
}

const google = async(req, res) => {
    passport.authenticate("google", { scope: ["profile", "email"] })(req, res)
}

const googleCallback = async(req, res) => {
    passport.authenticate("google", {
         failureRedirect: "/login",
         successRedirect: "/",
         failureFlash: "Invalid Google credentials"
    })(req, res)
}

const twitter = async(req, res, next) => {
    passport.authenticate('twitter', { scope: ['profile'] })(req, res, next)
}

const twitterCallback = async(req, res, next) =>{
    passport.authenticate("twitter", {
        failureRedirect: "/login",
        successRedirect: "/",
        failureFlash: "Invalid Twitter credentials"
    })(req, res, next)
}

const logout = (req, res) => {
    req.logout((err) => {
        if (err) { return next (err) }
        console.log(`Sucessful logout by ${req.user}`)
    })

    req.session.destroy((err) => {
        if (err) console.log("Error: Failed to destroy the session during logout", err)
        req.user = null
        res.redirect("/")
    })
}
const getAccount = (req, res) => {
    // TODO: check auth and return user info
    res.send("getAccount")
}

const deleteUser = (req, res) => {
    // TODO; check auth and delete user
    res.send("deleteUser")
}

// TODO: inline exports
module.exports = {
    getLogin,
    getSignup,
    postLogin,
    postSignup,
    google,
    googleCallback,
    twitter,
    twitterCallback,
    logout,
    getAccount,
    deleteUser,
}