import mongoose from "mongoose"
import {User} from "../Models"
import {responseHandler} from "../utils"


const addUser = async (req,res) => {
    let newUser = new User({
        name: req.body.name,
        history: []
    })
    userFound = await User.findOne({name: req.body.name})
    if(userFound)
        return responseHandler.send(res, "json", "", userFound)
    let savedUser = await newUser.save()
    if(savedUser)
        return responseHandler.send(res, "json", "", savedUser)
    return responseHandler.send(res, "invalid", "Entry already exists")
}


export default {
    addUser
}