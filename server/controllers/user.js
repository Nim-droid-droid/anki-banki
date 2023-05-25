const data = require("../models/index")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const dotenv = require("dotenv").config({ path: "./config/.env" });

const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if(!existingUser) return res.status(400).json({ message: "That user/password does not match an existing user"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({ message: "That user/password does not match an existing user"})

        const token = jwt.sign(
            {email: existingUser.email, id: existingUser._id},
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

const logout = async(req, res) => {
    res.send("logout")
}

const signup = async(req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    console.log(req.body)

    try {
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({ message: "User already exists." })

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" })

        const newUser = await User.create({ username, email, password })
        
        const token = jwt.sign(
            { email: newUser.email, id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        res.status(200).json({ result: newUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." + error });
    }
}

const getAccount = async(req, res) => {
    // TODO: check auth and return user info
    res.send("getAccount")
}

const deleteUser = async(req, res) => {
    // TODO; check auth and delete user
    res.send("deleteUser")
}

module.exports = {
    login,
    logout,
    signup,
    getAccount,
    deleteUser,
}