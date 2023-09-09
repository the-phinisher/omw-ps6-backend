import express from "express"
import userController from "../Controllers/userController"
const apiRouter = express.Router()

apiRouter.get("/", userController.getNearestUser)

apiRouter.delete("/", userController.deleteUser)

apiRouter.patch("/", userController.updateUser)

apiRouter.post("/", userController.addUser)

export default apiRouter
