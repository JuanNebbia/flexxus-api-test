import Articulo from "../models/articulo.model.js";
import { HttpError } from "../utils/httpError.js";
import { httpStatus } from "../utils/httpStatus.js";

export const getAll = async (filters = {}) => {
    const articulos = await Articulo.findAll({ where: filters });
    return articulos
};

export const getOneById = async (id) => {
    const articulo = await Articulo.findByPk(id);
    if(!articulo){
        throw new HttpError(httpStatus.NOT_FOUND, 'Article not found')
    }
    return articulo
};

export const createOne = async (body) => {
    const articulo = await Articulo.create(body);
    return articulo
};

export const updateOne = async (id, body) => {
    const articulo = await Articulo.findByPk(id);
    if(!articulo){
        throw new HttpError(httpStatus.NOT_FOUND, 'Article not found')
    }
    console.log(await articulo.update(body));
    return articulo;
};

export const deleteOne = async (id) => {
    const articulo = await Articulo.findByPk(id);
    if(!articulo){
        throw new HttpError(httpStatus.NOT_FOUND, 'Article not found')
    }
    await articulo.update({ status: false});
    return articulo;
};