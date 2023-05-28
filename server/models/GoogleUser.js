const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, required: true },
  displayName: { type: String, required: true },
  image: { type: String },
}, {
  timestamps: true
});

const GoogleUser = mongoose.model("GoogleUser", userSchema)

module.exports = GoogleUser