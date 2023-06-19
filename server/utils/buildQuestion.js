const mongoose = require("mongoose")
const Question = require("../models/Question")
const fs = require("fs/promises")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
      }
    )

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(`ERROR: ${err}`)
    process.exit(1)
  }
}

fs.readFile("data/questions.json", encoding="utf-8")
    .then((data) => {
        json = JSON.parse(data);
        for (let k in json) {
            // console.log(json[k])
            question = json[k]
            Question.create({
                question: question.question,
                answer: question.answer,
                type: question.type,
                categories: question.categories,
                recall_heuristic: 0,
            })
        }
    })
    .catch((error) => {
        console.log(error)
    })

connectDB()
// Run the script with...
// MONGODB_URI=[REDACTED] node utils/buildQuesitons.js