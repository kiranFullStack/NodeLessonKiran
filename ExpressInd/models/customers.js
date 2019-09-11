// Customer details
// Customer first name, last name, ph no, address, email, unique id
const mongoose = require("mongoose")
var Schema = mongoose.Schema

var CustomerSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  }
})

var Customer = mongoose.model("Customer", CustomerSchema)
module.exports = Customer
