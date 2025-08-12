import express from "express";
import dotenv from "dotenv";
import { startSendOtpConsummer } from "./consumer.js";
dotenv.config();
startSendOtpConsummer()
const app = express();
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
