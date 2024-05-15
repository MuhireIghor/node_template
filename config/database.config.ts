
import dotenv from "dotenv"
import { Sequelize } from "sequelize";
dotenv.config();
const dataBaseConfig = new Sequelize({
    dialect: "postgres",
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    password: process.env.DB_PASSWORD,
    logging: true,
    define: {
        freezeTableName: true,
    }


})
dataBaseConfig.
    authenticate()
    .then(() => {
        console.log(`✔ Database was connected successfully`);
    })
    .catch((err: any) => {
        console.error("❌ server did not start properly", err);

    });

export default dataBaseConfig;