import { Sequelize } from "sequelize-typescript";
import { Messages } from "../entities/messages";
import { User } from "../entities/user";

const DB_NAME = process.env.DB_NAME ?? "db_guestbook";
const DB_HOST = process.env.DB_HOST;
const DB_PORT = parseInt(process.env.DB_PORT ?? "3306");
const DB_USER = process.env.DB_USER ?? "root";
const DB_PASSWORD = process.env.DB_PASSWORD;

const sequelizeInstance = new Sequelize({
  database: DB_NAME, 
  username: DB_USER, 
  password: DB_PASSWORD, 
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: true,
  models: [
    Messages, User
  ]
});

sequelizeInstance
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Database error");
  });

export { sequelizeInstance };
