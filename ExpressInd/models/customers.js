// Customer details
// Customer first name, last name, ph no, address, email, unique id
const mongoose = require("mongoose")
var Schema = mongoose.Schema

var CustomerSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

var Customer = mongoose.model("Customer", CustomerSchema)
module.exports = Customer
