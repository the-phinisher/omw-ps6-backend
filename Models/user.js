const { Schema, model } = require("mongoose")

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

const User = model("User", userSchema)

module.exports = User
