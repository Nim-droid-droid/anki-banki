module.exports = {
    getQuestions: async (req, res) => {
      try {
        const questions = await Question.find();

        res.render("questions", { questions });

      } catch (err) {
        
        console.error(err);
        
        res.status(500).send("Internal Server Error");
      }
    },
  };