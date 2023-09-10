const mongoose = require("mongoose")
const User = require("../Models/user").model("User")
const { responseHandler } = require("../utils")

const addUser = async (req, res) => {
	let newUser = new User({
		name: req.body.name,
		history: [],
	})
	userFound = await User.findOne({ name: req.body.name })
	if (userFound) return responseHandler.send(res, "json", "", userFound)
	let savedUser = await newUser.save()
	if (savedUser) return responseHandler.send(res, "json", "", savedUser)
	return responseHandler.send(res, "invalid", "Server Error")
}

// const updStats=async(req,res)=>{

// }

module.exports = {
	addUser,
}
