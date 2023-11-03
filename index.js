const express = require("express")
const app = express()
const PORT = 8080

app.get("/", (req, res) => {
    res.send("holi")
})

app.get("/sofi", (req, res) => {
    res.send("holi sofi")
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))