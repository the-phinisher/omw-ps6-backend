const send = (res, type = "invalid", content = "", obj = {}) => {
	res.setHeader("statusCode", type == "invalid" ? 200 : 400)
	if (type == "json") {
		res.setHeader("Content-Type", "application/json")
		return res.end(JSON.stringify(obj))
	}
	return res.end(content)
}

module.exports = { send }
