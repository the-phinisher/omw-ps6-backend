const { Schema, model } = require("mongoose")

const questionSchema = new Schema({
	category: String,
	question: String,
	answer: String,
})

const Question = model("Question", questionSchema)

module.exports = Question
