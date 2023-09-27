import express from "express"
import { get } from "mongoose";
import { createFlight, deleteFlight,  updateFlight, getFlight, getFlights } from "../controllers/flightsController.js";



const router = express.Router();

//CREATE
router.post("/", createFlight)
//UPDATE
router.put("/:id", updateFlight)
//DELETE
router.delete("/:id", deleteFlight)
//GET
router.get("/:id", getFlight)
//GET ALL
router.get("/", getFlights)



export default router;