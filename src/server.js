const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send({ name: "Guest" })
})

module.exports = app
