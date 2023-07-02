const question_data = require("../data/questions.json")
const Question = require("../models/Question")

module.exports = {
    getQuestions: async(req, res) => {
        try {
            let user_id = req.query?.user_id;
            let type = req.query?.type;
            let categories = req.query?.categories;
            let all = req.query?.all;
            console.log(type, categories)

            if (!Array.isArray(categories)) { categories = new Array(categories) }
            
            let data;

            let filter = [
            ]
            if (all) {
                data = await Question.find({
                    user_id: user_id
                }).lean()
            } else {
                data = await Question
                    .find({
                        $or: [
                            { categories: { $in: categories } },
                            { type: { $eq: type } },
                        ]
                    }).lean()
                }

            console.table(data)
            res.json(data) 
        } catch (err) {
            if (process.env.NODE_ENV === "development") {
                res.send(`Poorly formed query: ${err}`)
            } else {
                res.send("Bad query")
            }
        }
    }
}