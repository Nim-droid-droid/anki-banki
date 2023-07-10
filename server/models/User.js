const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true },
  emailVerified: { type: Boolean, default: false },
  password: { type: String },

  // passwordResetToken: String,
  // passwordResetExpires: Date,
  // emailVerificationToken: String,
  
  // Alternative auth IDs
  googleId: { type: String },
  twitterId: { type: String },
  githubId: { type: String },
  tokens: { type: Array },
}, {
  timestamps: true
});

userSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

const User = mongoose.model("User", userSchema)

module.exports = User