import { HttpError } from "../utils/httpError.js";
import { httpStatus } from "../utils/httpStatus.js";

const allowedOrigins = "*";

export const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
        callback(new HttpError(httpStatus.FORBIDDEN, "CORS not allowed"));
    }
  },
};