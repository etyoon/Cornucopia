const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page")
})

app.get("/admin", (req, res) => {
    res.send("This is the admin page")
})

app.listen(3000)