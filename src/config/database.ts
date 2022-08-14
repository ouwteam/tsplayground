import { Sequelize } from "sequelize";

export const db: Sequelize = new Sequelize({
    host: <string>process.env.DB_HOST,
    database: <string>process.env.DB_NAME,
    username: <string>process.env.DB_USER,
    password: <string>process.env.DB_PASS,
    port: parseInt(<string>process.env.DB_PORT, 10) || 5432,
    dialect: 'mysql',
    timezone: 'Asia/Jakarta'
});

export default async function syncDB() {
    return await db.sync();
}
