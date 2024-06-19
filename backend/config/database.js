import { Sequelize } from "sequelize";

const db = new Sequelize("house_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
