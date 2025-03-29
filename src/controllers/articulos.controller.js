import * as articulosService from "../services/articulos.service.js"
import { HttpResponse } from "../utils/httpResponse.js";
import { httpStatus } from "../utils/httpStatus.js";

export const getAllArticulos = async (req, res, next) => {
    const filters = req.query
  try {
    const articulos = await articulosService.getAll(filters);
    const response = new HttpResponse(httpStatus.SUCCESS, "Articles found", articulos)
    res.status(httpStatus.SUCCESS).json(response);
  } catch (error) {
    next(error)
  }
};

export const getArticuloById = async (req, res, next) => {
    const { id } = req.params
  try {
    const articulo = await articulosService.getOneById(id);
    const response = new HttpResponse(httpStatus.SUCCESS, "Article found", articulo)
    res.status(httpStatus.SUCCESS).json(response);
  } catch (error) {
    next(error)
  }
};

export const createArticulo = async (req, res, next) => {
    const { body } = req
  try {
    const articulo = await articulosService.createOne(body);
    const response = new HttpResponse(httpStatus.CREATED, "Article successfully created", articulo)
    res.status(httpStatus.CREATED).json(response);
  } catch (error) {
    next(error)
  }
};

export const updateArticulo = async (req, res, next) => {
    const { body } = req
    const { id } = req.params 
  try {
    const articulo = await articulosService.updateOne(id, body);
    const response = new HttpResponse(httpStatus.SUCCESS, "Article successfully updated", articulo)
    res.status(httpStatus.SUCCESS).json(response);
  } catch (error) {
    next(error)
  }
};

export const deleteArticulo = async (req, res, next) => {
    const { id } = req.params 
  try {
    await articulosService.deleteOne(id);
    res.status(httpStatus.NO_CONTENT).send()
  } catch (error) {
    next(error)
  }
};