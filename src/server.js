const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send({ name: "Guest" })
})

app.post("/", (req, res) => {
  const formData = {
    name: req.body.name,
    age: req.body.age
  }

  res.send(formData)
})

module.exports = app
