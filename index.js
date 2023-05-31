const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes.js")

const app = express();
mongoose.connect("mongodb+srv://Rushi:123@cluster0.0zh1qyl.mongodb.net/?retryWrites=true&w=majority").then(()=>{ console.log("database connect")})

app.use(express.json())
 app.use("/api",routes)


app.listen(3000)
console.log("app started")