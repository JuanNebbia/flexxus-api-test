import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.config.js";
import appRoutes from "./routes/app.routes.js"
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { corsOptions } from "./config/cors.config.js";
import swaggerDocs from "./config/swagger.config.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000

await connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

swaggerDocs(app)

app.use('/', appRoutes)
app.use(errorMiddleware)

app.listen(PORT, ()=> console.log('Server listening on port', PORT));