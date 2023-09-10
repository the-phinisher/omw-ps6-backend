require("dotenv").config()
// const mongoose = require("mongoose")

// mongoose.connect(
// 	process.env.MONGODB_URI
// 		? process.env.MONGODB_URI
// 		: "mongodb://localhost:27017"
// )

module.exports = {
	PORT: process.env.PORT,
	// 	MONGODB_URI: process.env.MONGODB_URI,
}
