const express = require("express")
const userController = require("../Controllers/userController")
const apiRouter = express.Router()

apiRouter.post("/addUser", (req, res) => userController.addUser(req, res))
apiRouter.post("/updStats", (req, res) => userController.updStats(req, res))

module.exports = apiRouter
