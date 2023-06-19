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
