const question_data = require("../data/questions.json")

module.exports = {
    getQuestions: async(req, res) => {
        try {
            types = req.query.types;
            data = question_data.filter(x => types.includes(x.type))
            res.json(data)
        } catch (err) {
            res.send("Bad question parameters")

        }
    }
}