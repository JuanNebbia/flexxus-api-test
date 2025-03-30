import dotenv from "dotenv"
import { Sequelize } from "sequelize";

dotenv.config();

const isDeployment = process.env.DB_URL;

let sequelize;

if (isDeployment) {
  sequelize = new Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
      logging: false,
    }
  );
}


const connectDB = async(retries = 3, delay = 3000) => {
    while(retries){
        try {
            await sequelize.authenticate()
            console.log("DB connected successfully")
            return
        } catch (err) {
            console.log("Error connecting to DB:", err.message)
            retries -=1
            if(!retries){
                console.log("DB connection failed:", err.message)
                process.exit(1)
            }
            console.log("Retrying connection...")
            await new Promise((res) => setTimeout(res, delay));
        }
    }
}

export { sequelize, connectDB };
