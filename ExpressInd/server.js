const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")

var db = require("./db/mongoose")
var Customer = require("./models/customers")
var app = express()

app.use(bodyParser.json())
app.post("/customer/create", (req, res) => {
  var john = new Customer(req.body)
  john
    .save()
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(err => console.log(err))
})

app.listen(3000, () => console.log("Running server😎............."))
