// ESM syntax is supported.
import express from "express"
import router from "./routes"

const app = express()

app.use("/", router)

app.listen(5000, () => {
  console.log("Server running on 5000 🚀 🚀 🚀 🚀 🚀 🚀")
})
