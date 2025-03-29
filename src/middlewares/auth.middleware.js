import jwt from "jsonwebtoken";
import { httpStatus } from "../utils/httpStatus.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const error = { statusCode: httpStatus.UNAUTHORIZED, error: "Unauthorized request"}
    return res.status(httpStatus.UNAUTHORIZED).json(error);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(httpStatus.FORBIDDEN).json({ message: "Invalid or expired token" });
  }
};
