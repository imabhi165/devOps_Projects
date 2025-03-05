import express from "express"
import "dotenv/config"
const app = express()
const PORT = process.env.PORT || 8000


app.get("/" , (req, res) => {
  return req.json({message : `Hello It is Working ... `})
})


app.listen(PORT, () => console.log(`server is listening on ${PORT}`))