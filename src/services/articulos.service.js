import Articulo from "../models/articulo.model.js";

export const getAll = async (filters = {}) => {
    const articulos = await Articulo.findAll({ where: filters });
    console.log(articulos)
    return articulos
};

export const getOneById = async (id) => {
    const articulo = await Articulo.findByPk(id);
    return articulo
};

export const createOne = async (body) => {
    const articulo = await Articulo.create(body);
    return articulo
};

export const updateOne = async (id, body) => {
    const articulo = await Articulo.findByPk(id);
    if (!articulo) return null;
  
    await articulo.update(body);
    return articulo;
};

export const deleteOne = async (id) => {
    const articulo = await Articulo.findByPk(id);
    if (!articulo) return null;
  
    await articulo.update({ status: false});
    return articulo;
};