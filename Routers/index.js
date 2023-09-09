const express = require("express")
const userController = require("../Controllers/userController")
const apiRouter = express.Router()

apiRouter.get("/", userController.getNearestUser)

apiRouter.delete("/", userController.deleteUser)

apiRouter.patch("/", userController.updateUser)

apiRouter.post("/", userController.addUser)

module.exports = apiRouter
