import { Router } from "express";
import articlesRouter from "./articles.routes.js";
import authRouter from "./auth.routes.js";
import { HttpResponse } from "../utils/httpResponse.js";
import { httpStatus } from "../utils/httpStatus.js";

const router = Router()

router.use('/auth', authRouter)
router.use('/articles', articlesRouter)

router.use('/', (req, res) =>{
    const response = new HttpResponse(httpStatus.SUCCESS, "Bienvenido a la API de Artículos de Juan Nebbia. Consulte la documentación para acceder a rutas permitidas")
    res.status(200).send(response)
})

export default router;