import express from "express";
import { sendMsg } from "../controllers/sms.controller.js";

const smsRouter = express.Router();

smsRouter.post("/send", sendMsg);

export default smsRouter;
