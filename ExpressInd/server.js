const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")

var db = require("./db/mongoose")
var Customer = require("./models/customers")
var app = express()

app.get("/", (req, res) => {
  res.send("Hi bro")
})

var kiran = new Customer({
  firstName: "Kiran",
  lastName: "R",
  email: "kiran.example.com"
})

kiran
  .save()
  .then(result => console.log(result))
  .catch(err => console.log(err))

app.listen(3000, () => console.log("Running server😎............."))
