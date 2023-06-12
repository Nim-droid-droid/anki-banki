const question_data = require("../data/questions.json")

module.exports = {
    getQuestions: async(req, res) => {
        try {
            let data = question_data;
            const types = req.query.types;
            if (types) {
                console.log(types)
                data = question_data.filter(x => types.includes(x.type))
            }

            const categories = new Array(req.query.categories);
            console.log(categories)
            if (req.query.categories) {
                data = question_data.filter(item => categories.every(cat => item.categories.includes(cat)))
            }

            console.table(data)
            res.json(data) 
        } catch (err) {
            res.send(`Poorly formed query: ${err}`)

        }
    }
}