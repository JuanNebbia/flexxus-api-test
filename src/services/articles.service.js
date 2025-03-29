import Article from "../models/articles.model.js";
import { HttpError } from "../utils/httpError.js";
import { httpStatus } from "../utils/httpStatus.js";

export const getAll = async (filters = {}) => {
    const articles = await Article.findAll({ where: filters });
    return articles
};

export const getOneById = async (id) => {
    const article = await Article.findByPk(id);
    if(!article){
        throw new HttpError(httpStatus.NOT_FOUND, 'Article not found')
    }
    return article
};

export const createOne = async (body) => {
    const article = await Article.create(body);
    return article
};

export const updateOne = async (id, body) => {
    const article = await Article.findByPk(id);
    if(!article){
        throw new HttpError(httpStatus.NOT_FOUND, 'Article not found')
    }
    article.update(body)
    return article;
};

export const deleteOne = async (id) => {
    const article = await Article.findByPk(id);
    if(!article){
        throw new HttpError(httpStatus.NOT_FOUND, 'Article not found')
    }
    await article.update({ status: false});
    return article;
};