import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import flightsRoute from "./routes/flights.js"
import ticketsRoute from "./routes/tickets.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()


const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongo")
    } catch(error){
        throw error
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongo disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongo connected")
})

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/flights", flightsRoute)
app.use("/api/tickets", ticketsRoute)

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json(errorMessage)
})

app.listen(5000, ()=>{
    connect()
    console.log("Connected to backend!")
})