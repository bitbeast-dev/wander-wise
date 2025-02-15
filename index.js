import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import smsRouter from "./routers/sms.router.js";
import imageRouter from "./routers/images.router.js";
dotenv.config();
const env = process.env;

const app = express();
app.use(express.json());
app.use(cors());
const port = env.PORT;

app.listen(port, () => {
  console.log("server is running....");
});

app.use("/api/sms/", smsRouter);
app.use("/api/images", imageRouter);

app.get("/", (req, res) => {
  res.status(200).json({ messae: "hello world" });
});
