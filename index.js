import express from "express";
import dotenv from "dotenv";

import smsRouter from "./routers/sms.router.js";
dotenv.config();
const env = process.env;

const app = express();
app.use(express.json());

const port = env.PORT;

app.listen(port, () => {
  console.log("server is running....");
});

app.use("/api/sms/", smsRouter);
