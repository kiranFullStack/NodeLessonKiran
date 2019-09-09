const express = require("express")
const app = express()

let firstJSON = [{ name: "kiran", income: "50 Lakh" }]

app.get("/", (req, res) => {
  //   res.send({ name: "Kiran", NetWorth: "10 Crore" })
  res.send(firstJSON)
})

app.listen(3000, () => console.log("Running on 3000"))
