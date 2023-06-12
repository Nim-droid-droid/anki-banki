const question_data = require("../data/questions.json")

module.exports = {
    getQuestions: async(req, res) => {
        try {
            let data = question_data;
            const types = req.query.types;
            if (types) {
                data = data.filter(x => types.includes(x.type))
            }

            let categories = req.query.categories;
            if (typeof(categories) === "string") {
                // Only one category provided in query parameters
                category = categories
                data = data.filter(item => item.categories.includes(category))
            } else if (categories) {
                // Multiple categories provided in query parameters
                data = data.filter(item => categories.every(cat => item.categories.includes(cat)));
            }

            console.table(data)
            res.json(data) 
        } catch (err) {
            res.send(`Poorly formed query: ${err}`)

        }
    }
}