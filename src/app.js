import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import appRoutes from "./routes/app.routes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000

connectDB()

app.use(express.json())
app.use('/', appRoutes)

app.listen(PORT, ()=> console.log('Server listening on port', PORT));