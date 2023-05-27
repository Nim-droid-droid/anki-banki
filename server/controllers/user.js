const User = require("../models/User")
const passport = require("passport")

const getLogin = (req, res) => {
    res.send("Login page")
}

const getSignup = (req, res) => {
    res.send("Signup page")
}

const postLogin = (req, res, next) => {
    // TODO: email / password with validator.js
    passport.authenticate("local", { failureRedirect: "/login", failureMessage: true},
        (err, user, info) => {
            if (err) { return next(err) }
            if (!user) {
                console.log(`Failed login. User: "${req.body.email}" does not exist`)
                return res.redirect("/")
            }
            req.login(user, (err) => {
                if(err) { return next(err) }
                console.log(`Successful login by: ${user.email}`)
                res.redirect("/home")
            })
        })(req, res, next)
}

const postSignup = async(req, res, next) => {
    // TODO: sanitize username / email / password with validator.js
    const { username, email, password, confirmPassword } = req.body;

    const user = new User({ username, email, password })

    const existingUser = await User.findOne({$or: [ { email }, { username }]})
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

const logout = (req, res) => {
    // TODO: remove this workaround once passportjs is properly updated to stop giving
    // req.session.regenerate undefined errors, otherwise this is a needed workaround
    req.session.regenerate((cb) => null)

    req.logout(() => {
        console.log("User has logged out")
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

module.exports = { getLogin, getSignup, postLogin, postSignup , logout, getAccount, deleteUser }