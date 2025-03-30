import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de Artículos",
    version: "1.0.0",
    description: "Documentación de la API",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor local",
    },
  ],
};

const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, "../docs/*.yaml")],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
