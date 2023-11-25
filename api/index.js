import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import flightsRoute from "./routes/flights.js"
import ticketsRoute from "./routes/tickets.js"
import mailRoute from "./routes/mail.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()


dotenv.config()
app.use(cors())
app.options("*", cors());

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongo")
    } catch(error){
        throw error
    }
}

mongoose.connection.on("connected", () => {
    console.log("Mongo connected at", new Date());
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongo disconnected at", new Date());
});


//middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/flights", flightsRoute)
app.use("/api/tickets", ticketsRoute)
app.use("/api/email", mailRoute)
app.use("/api/", (req,res)=>{
    res.send("hello world")
})



app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json(errorMessage)
})

app.listen(5000, ()=>{
    connect()
    console.log("Connected to backend!")
})