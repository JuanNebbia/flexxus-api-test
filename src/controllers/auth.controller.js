import jwt from "jsonwebtoken";
import { HttpError } from "../utils/httpError.js";
import { httpStatus } from "../utils/httpStatus.js";

export const login = (req, res, next) => {
    const { username, password } = req.body;
    try {
        if (username !== process.env.ADMIN_USER || password !== process.env.ADMIN_PASS) {
          throw new HttpError(httpStatus.UNAUTHORIZED, 'Invalid credentials')
        }
      
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {
          expiresIn: '2h',
        });
      
        res.json({ token });
        
    } catch (error) {
        next(error)
    }

};