const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
var db = require("./db/mongoose")
var Customer = require("./models/customer")
var app = express()

const PORT = process.env.PORT || 3000

//
// ─── POST ───────────────────────────────────────────────────────────────────────
//
app.use(bodyParser.json())

app.post("/customer", (req, res) => {
  var customer = new Customer(req.body)
  customer
    .save()
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(err => console.log(err))
})

//
// ─── GET ────────────────────────────────────────────────────────────────────────
//

app.get("/customer", (req, res) => {
  Customer.find({})
    .then(result => {
      return Customer.find({})
    })
    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err))
})
//
// ─── GET ONE ────────────────────────────────────────────────────────────────────
//

app.get("/customer/:id", (req, res) => {
  Customer.findOne({ _id: req.params.id })

    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err))
})

//
// ─── PATCH ──────────────────────────────────────────────────────────────────────
//

app.patch("/customer/:id", (req, res) => {
  Customer.findOneAndUpdate({ _id: req.params.id }, req.body)

    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err))
})

//
// ─── DELETE ─────────────────────────────────────────────────────────────────────
//

app.delete("/customer/:id", (req, res) => {
  Customer.findOneAndDelete({ _id: req.params.id })

    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err))
})

//
// ─── SERVER RUNNING ─────────────────────────────────────────────────────────────
//

app.listen(PORT, () => {
  console.log("🚀🚀🚀🚀🚀🚀Express listening on port:", PORT)
})
