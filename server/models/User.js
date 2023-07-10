const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  // passwordResetToken: String,
  // passwordResetExpires: Date,
  // emailVerificationToken: String,
  // emailVerified: Boolean,

  twitter: String,
  google: String,
  github: String,
  tokens: Array,

}, {
  timestamps: true
});

// userSchema.pre("save", async function save(next) {
//   const user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) {
//         return next(err);
//       }
//       user.password = hash;
//       next();
//     });
//   });
// });
/**
 * Password hash middleware.
 */
userSchema.pre('save', async function save(next) {
  const user = this;
  if (!user.isModified('password')) { 
    return next(); }
  try {
    user.password = await bcrypt.hash(user.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = async function comparePassword(
  candidatePassword,
  cb
) {
  // bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
  //   cb(err, isMatch);
  // });
  try {
    cb(null, await bcrypt.verify(candidatePassword, this.password));
  } catch (err) {
    cb(err);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;