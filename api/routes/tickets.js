import express from "express";
import { createTicket, deleteTicket, getTicket, updateTicket, getTickets } from "../controllers/ticketsController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:flightid", verifyAdmin, createTicket);

//UPDATE
router.put("/:id", verifyAdmin, updateTicket);
//DELETE
router.delete("/:id/:flightid", verifyAdmin, deleteTicket);
//GET

router.get("/:id", getTicket);
//GET ALL

router.get("/", getTickets);

export default router;