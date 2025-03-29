import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import articulosRoutes from "./routes/articulos.routes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

connectDB()

app.use('/articulos', articulosRoutes)

app.listen(PORT, ()=> console.log('Server listening on port', PORT));