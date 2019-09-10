// Customer info
const mongoose = require("mongoose")
mongoose.Promise = global.Promise

var db = mongoose.connect(
  "mongodb+srv://kiran:root@cluster0-jysno.mongodb.net/test?retryWrites=true&w=majority"
)

module.exports = db
