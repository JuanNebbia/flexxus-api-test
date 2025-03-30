import { Router } from "express";
import * as articlesController from "../controllers/articles.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validateCreateArticle, validateDeleteArticle, validateGetArticle, validateGetArticles, validateUpdateArticle } from "../middlewares/validation.middleware.js";

const router = Router()

router.get('/', validateGetArticles, articlesController.getAllArticles)
router.get('/:id', validateGetArticle, articlesController.getArticleById)
router.post('/', authMiddleware, validateCreateArticle, articlesController.createArticle)
router.patch('/:id', authMiddleware, validateUpdateArticle, articlesController.updateArticle)
router.delete('/:id', authMiddleware, validateDeleteArticle, articlesController.deleteArticle)
 
export default router;
