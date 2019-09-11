//
// ─── CONNECTING TO MONGODB ──────────────────────────────────────────────────────
//

const mongoose = require("mongoose")
mongoose.Promise = global.Promise

var db = mongoose.connect(
  "mongodb+srv://kiran:kiran@cluster0-kuech.mongodb.net/test?retryWrites=true&w=majority"
)

module.exports = db
