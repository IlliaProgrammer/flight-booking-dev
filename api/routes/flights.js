import express from "express"
import { get } from "mongoose";
import { createFlight, deleteFlight,  updateFlight, getFlight, getFlights } from "../controllers/flightsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";



const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createFlight)
//UPDATE
router.put("/:id", verifyAdmin, updateFlight)
//DELETE
router.delete("/:id", verifyAdmin, deleteFlight)
//GET
router.get("/:id", getFlight)
//GET ALL
router.get("/", getFlights)



export default router;