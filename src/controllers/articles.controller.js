import { ArticleDTO } from "../dtos/articles.dto.js";
import * as articlesService from "../services/articles.service.js"
import { HttpResponse } from "../utils/httpResponse.js";
import { httpStatus } from "../utils/httpStatus.js";

export const getAllArticles = async (req, res, next) => {
    const filters = req.query
  try {
    const articles = await articlesService.getAll(filters);
    const response = new HttpResponse(httpStatus.SUCCESS, "Success", ArticleDTO.array(articles))
    res.status(httpStatus.SUCCESS).json(response);
  } catch (error) {
    next(error)
  }
};

export const getArticleById = async (req, res, next) => {
    const { id } = req.params
  try {
    const article = await articlesService.getOneById(id);
    const response = new HttpResponse(httpStatus.SUCCESS, "Article found", ArticleDTO.single(article))
    res.status(httpStatus.SUCCESS).json(response);
  } catch (error) {
    next(error)
  }
};

export const createArticle = async (req, res, next) => {
    const { body } = req
  try {
    const article = await articlesService.createOne(body);
    const response = new HttpResponse(httpStatus.CREATED, "Article successfully created", ArticleDTO.single(article))
    res.status(httpStatus.CREATED).json(response);
  } catch (error) {
    next(error)
  }
};

export const updateArticle = async (req, res, next) => {
    const { body } = req
    const { id } = req.params 
  try {
    const article = await articlesService.updateOne(id, body);
    const response = new HttpResponse(httpStatus.SUCCESS, "Article successfully updated", ArticleDTO.single(article))
    res.status(httpStatus.SUCCESS).json(response);
  } catch (error) {
    next(error)
  }
};

export const deleteArticle = async (req, res, next) => {
    const { id } = req.params 
  try {
    await articlesService.deleteOne(id);
    res.status(httpStatus.NO_CONTENT).send()
  } catch (error) {
    next(error)
  }
};