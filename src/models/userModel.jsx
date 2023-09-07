import { Sequelize } from 'sequelize';
import db from '../config/database';

const { DataTypes } = Sequelize;

const Users = db.define(
  'user',
  {
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
  }
);
(async () => {
  await db.sync();
})();

export default Users;
