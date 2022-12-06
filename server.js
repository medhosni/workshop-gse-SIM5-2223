import express from "express";
import gameRouter from "./Routes/Game.rout.js"
import mongoose from "mongoose"
const app = express()
const dataBaseName= "workshop4"
app.use(express.json())

app.use("/game",gameRouter)

const hostname = "127.0.0.1"
const port = process.env.port || 9090
mongoose
.connect(`mongodb://127.0.0.1:27017/${dataBaseName}`)
.then(()=>{
    console.log("connected to the database ")
})
.catch((err)=>{
    console.log(err)
})
app.listen(port,hostname,()=>{
    console.log("server running on port 9090")})
