//
// ─── DEFINING SCHEMA ────────────────────────────────────────────────────────────
//

const mongoose = require("mongoose")
var Schema = mongoose.Schema

var CustomerSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },

  phone: {
    type: String
  },
  address: {
    type: String
  }
})

var Customer = mongoose.model("Customer", CustomerSchema)
module.exports = Customer
