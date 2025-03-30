const allowedOrigins = ["*"];

export const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
      callback(null, true);
    } else {
      callback(new HttpError(httpStatus.FORBIDDEN, "CORS not allowed"));
    }
  },
};