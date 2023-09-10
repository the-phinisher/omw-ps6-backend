require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const config = require("./config")
const apiRouter = require("./Routers")
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", apiRouter)

app.listen(config.PORT, () => {
	console.log("Server started at " + config.PORT)
})
