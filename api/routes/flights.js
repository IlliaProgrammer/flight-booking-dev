import express from "express"
import { get } from "mongoose";
import { createFlight, deleteFlight,  updateFlight, getFlight, getFlights, countByCity, countByType } from "../controllers/flightsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";



const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createFlight)
//UPDATE
router.put("/:id", verifyAdmin, updateFlight)
//DELETE
router.delete("/:id", verifyAdmin, deleteFlight)
//GET
router.get("/find/:id", getFlight)
//GET ALL
router.get("/", getFlights)
//GET BY CITY
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)




export default router;