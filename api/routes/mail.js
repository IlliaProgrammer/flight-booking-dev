import express from "express"
import { get } from "mongoose";
 import { send, contact } from "../controllers/mailController.js";

const router = express.Router();

router.post("/send", send)
router.post("/contact", contact)


export default router;