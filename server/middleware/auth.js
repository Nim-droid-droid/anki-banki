const jwt = require("jsonwebtoken");
const User = require("../models/User")

const ensureAuth = async(req, res, next) => {
    const token = req.cookies?.jwt;

    if (req.isAuthenticated()) {
        return next()
    } else {
        res.redirect("/")
    }
}

const ensureGuest = async(req, res, next) => {
    console.log("ensureGuest", req)
    if (req.isAuthenticated()) {
        res.redirect("/")
    } else {
        return next()
    }
}

module.exports = { ensureAuth, ensureGuest }