import { Sequelize } from "sequelize";

const db = new Sequelize('Ckeoeq2LSZGLA110', 'WfAjHThDptCwP8FA', 'VxqvThhECCDRVavr', {
    host: 'educalab.id',
    port: 5000,
    dialect: 'mysql'
});

export default db;