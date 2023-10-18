import express from "express";
import { createTicket, deleteTicket, getTicket, updateTicket, getTickets, updateTicketAvailability } from "../controllers/ticketsController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:flightid", verifyAdmin, createTicket);

//UPDATE
router.put("/:id", verifyAdmin, updateTicket);
router.put("/availability/:id", updateTicketAvailability);
//DELETE
router.delete("/:id/:flightid", verifyAdmin, deleteTicket);
//GET

router.get("/:id", getTicket);
//GET ALL

router.get("/", getTickets);

export default router;