import express from "express"
import { get } from "mongoose";
 import { send } from "../controllers/mailController.js";

const router = express.Router();

router.post("/send", send)


export default router;