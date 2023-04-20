const data = require("../models/index")

module.exports = {
    getLogin: (req, res) => {
        res.send("login")
    },
    postLogin: (req, res) => {
        res.send("postLogin")
    },
    logout: (req, res) => {
        res.send("logout")
    },
    signup: (req, res) => {
        res.send("getSignup")
    },
    getAccount: (req, res) => {
        res.send("getAccount")
    },
    deleteUser: (req, res) => {
        res.send("deleteUser")
    },
}