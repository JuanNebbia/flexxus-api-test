import * as articulosService from "../services/articulos.service.js"

export const getAllArticulos = async (req, res) => {
    const filters = req.query
  try {
    const articulos = await articulosService.getAll(filters);
    res.json(articulos);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error obteniendo los artículos", error });
  }
};

export const getArticuloById = async (req, res) => {
    const { id } = req.params
  try {
    const articulo = await articulosService.getOneById(id);
    if(!articulo){
        return res.status(404).json('Article not found')
    }
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo el artículo", error });
  }
};

export const createArticulo = async (req, res) => {
    const { body } = req
  try {
    const articulo = await articulosService.createOne(body);
    if(!articulo){
        return res.status(500).json('Article not created')
    }
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ message: "Error creando el artículo", error });
  }
};

export const updateArticulo = async (req, res) => {
    const { body } = req
    const { id } = req.params 
  try {
    const articulo = await articulosService.updateOne(id, body);
    if(!articulo){
        return res.status(500).json('Article not updated')
    }
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando el artículo", error });
  }
};

export const deleteArticulo = async (req, res) => {
    const { id } = req.params 
  try {
    const articulo = await articulosService.deleteOne(id);
    if(!articulo){
        return res.status(500).json('Article not deleted')
    }
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando el artículo", error });
  }
};

