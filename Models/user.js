import { Schema, model } from "mongoose"

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		validate: {
			validator: (namestring) => {
				return /^[a-z ]+$/i.test(namestring)
			},
			message: "Invalid Name",
		},
	},
	history: Array,
})

export const User = model("User", userSchema)
