import express from "express";
import { verifyImage } from "../controllers/images.controller.js";

const imageRouter = express.Router();

imageRouter.post("/verify", verifyImage);

export default imageRouter;
