import * as articulosService from "../services/articulos.service.js"

export const getAllArticulos = async (req, res, next) => {
    const filters = req.query
  try {
    const articulos = await articulosService.getAll(filters);
    res.json(articulos);
  } catch (error) {
    next(error)
  }
};

export const getArticuloById = async (req, res, next) => {
    const { id } = req.params
  try {
    const articulo = await articulosService.getOneById(id);
    res.json(articulo);
  } catch (error) {
    next(error)
  }
};

export const createArticulo = async (req, res, next) => {
    const { body } = req
  try {
    const articulo = await articulosService.createOne(body);
    if(!articulo){
      return res.status(500).json('Article not created')
    }
    res.json(articulo);
  } catch (error) {
    next(error)
  }
};

export const updateArticulo = async (req, res, next) => {
    const { body } = req
    const { id } = req.params 
  try {
    const articulo = await articulosService.updateOne(id, body);
    res.json(articulo);
  } catch (error) {
    next(error)
  }
};

export const deleteArticulo = async (req, res, next) => {
    const { id } = req.params 
  try {
    const articulo = await articulosService.deleteOne(id);
    res.json(articulo);
  } catch (error) {
    next(error)
  }
};

