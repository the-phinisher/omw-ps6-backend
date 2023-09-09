import { Schema, model } from "mongoose"

const questionSchema = new Schema({
	category: String,
	question: String,
	answer: String,
})

export const Question = model("Question", questionSchema)
