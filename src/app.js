import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

connectDB()

app.listen(PORT, ()=> console.log('Server listening on port', PORT));