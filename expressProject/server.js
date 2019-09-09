const express = require("express")
const app = express()

app.get("/", (req, res) => {
  //   res.send("Hello motherfucker")
  res.send({ name: "Kiran", NetWorth: "1 Crore" })
})

app.listen(3000, () => console.log("Running on 3000"))
