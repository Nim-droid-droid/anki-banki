const mongoose = require("mongoose");

// * * * * * * * * * * * * * * * * * *
//Question.js
// * * * * * * * * * * * * * * * * * *

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    require: true,
  },
  category: {
    type: String,
  },
  status: {
    type: String,
    default: 'unanswered' //also have great, good, ok, bad
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Question", QuestionSchema);




// ----------

// const bcrypt = require("bcrypt");
// const mongoose = require("mongoose");

//
// * * * * * * * * * * * * * * * * * *
//User.js
// * * * * * * * * * * * * * * * * * *

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

// TODO: will need more for google / github / discord auth probably?

// Password hash middleware.

UserSchema.pre("save", function save(next) {
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

// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);