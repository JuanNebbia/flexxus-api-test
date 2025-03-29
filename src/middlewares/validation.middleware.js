import { body, param, query, validationResult } from "express-validator";
import { httpStatus } from "../utils/httpStatus.js";

const validateRequest = (req, res, next) => {
  const {errors} = validationResult(req);
  if (errors.length) {
    const error = { statusCode: httpStatus.BAD_REQUEST, message: "Validation Failed", errors }
    return res.status(httpStatus.BAD_REQUEST).json(error);
  }
  next();
};

export const validateGetArticles = [
    query("name").optional().isString(),
    query("status").optional().isBoolean().withMessage("status field must be a valid boolean"),
    validateRequest,
];

export const validateGetArticle = [
    param("id").isUUID().withMessage("id must be a valid uuid"),
    validateRequest,
];

export const validateCreateArticle = [
  body("name").notEmpty().withMessage("name field is required").isString().withMessage("name field must be a string"),
  body("brand").notEmpty().withMessage("brand field is required").isString().withMessage("brand field must be a string"),
  body("status").optional().isBoolean().withMessage("status field must be a boolean"),
  validateRequest,
];

export const validateUpdateArticle = [
  param("id").isUUID().withMessage("id must be a valid uuid"),
  body("name").optional().isString().withMessage("name field must be a string"),
  body("brand").optional().isString().withMessage("brand field must be a string"),
  body("status").optional().isBoolean().withMessage("status field must be a boolean"),
  validateRequest,
];

export const validateDeleteArticle = [
    param("id").isUUID().withMessage("id must be a valid uuid"),
    validateRequest,
];