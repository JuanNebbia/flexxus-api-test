import jwt from "jsonwebtoken";
import { HttpError } from "../utils/httpError.js";
import { httpStatus } from "../utils/httpStatus.js";
import { HttpResponse } from "../utils/httpResponse.js";

export const login = (req, res, next) => {
    const { username, password } = req.body;
    try {
        if (username !== process.env.ADMIN_USER || password !== process.env.ADMIN_PASS) {
          throw new HttpError(httpStatus.UNAUTHORIZED, 'Invalid credentials')
        }
      
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {
          expiresIn: '2h',
        });

        const response = new HttpResponse(httpStatus.SUCCESS, "Logged in", { token })
        res.status(httpStatus.SUCCESS).json(response);
    } catch (error) {
        next(error)
    }
};