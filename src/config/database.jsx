import { Sequelize } from 'sequelize';

const db = new Sequelize('agra_store', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
