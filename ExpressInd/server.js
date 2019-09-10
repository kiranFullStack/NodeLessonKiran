const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")

var db = require("./db/mongoose")
var Customer = require("./models/customers")
var app = express()

app.get("/", (req, res) => {
  res.send({
    name: "kiki",
    age: "30"
  })
})

var kiranfdsfs = new Customer({
  firstName: "Kiranfdfdfs",
  lastName: "R",
  email: "kiran.example.com"
})

app.post("/customer/create", (req, res) => {
  res.status(200).send("all ok")
})

kiranfdsfs
  .save()
  .then(result => console.log(result))
  .catch(err => console.log(err))

app.listen(3000, () => console.log("Running server😎............."))
