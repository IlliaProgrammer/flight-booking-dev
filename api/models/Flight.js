import mongoose from "mongoose";
const {Schema} = mongoose;

const FlightSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true
    },
    stops:{
        type: String,
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    tickets:{
        type: [String],
    },
    cheapestPrice:{
        type: Number,
        required: true
    },
    featured:{
        type: Boolean,
        default: false
    }
})

export default mongoose.model("Flight", FlightSchema)