const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")

var db = require("./db/mongoose")
var Customer = require("./models/customers")
var app = express()

app.listen(3000, () => console.log("Running server😎............."))

app.get("/", (req, res) => {
  res.send("Hi bro")
})
