const mongoose = require("mongoose");

// * * * * * * * * * * * * * * * * * *
// Question.js
// * * * * * * * * * * * * * * * * * *
const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String
  },
  type: {
    type: String, enum: ["behavioral", "technical"]
  },
  categories: {
    type: [String],
  },
  recall_heuristic: {
    /* Number indicating successful rate of recall for a question

    0: card has not been reviewed yet / Unknown
    1-250: New card / short term recall / learning
    251-500: Good - 
    750+: Great

    The recall heuristic is used to determine when a card should next
    be reviewed
    */
    type: Number,
    validate: (v => {
      return (v >= 0 && v <= 1000)
    }),
    default: 0 
  },
  last_review: {
    type: Date,
    default: null,
  },
  next_review: {
    type: Date,
    default: Date.now,
  },
  review_count: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  last_updated: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Question", QuestionSchema);
