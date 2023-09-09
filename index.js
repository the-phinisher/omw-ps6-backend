require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const config = require("./config")
const apiRouter = require("./Routers")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/", apiRouter)

app.listen(config.PORT, () => {
	console.log("Server started at " + config.PORT)
})
