import express from "express";
import bodyParser from "body-parser";
import gameRouter from "./Routes/Game.rout.js"

const app = express()
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use("/game",gameRouter)

const hostname = "127.0.0.1"
const port = process.env.port || 9090

app.listen(port,hostname,()=>{
    console.log("server running on port 9090")})
