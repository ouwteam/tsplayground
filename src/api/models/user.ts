import { db } from '../../config/database';
import { Model, DataTypes, Sequelize } from 'sequelize';

export default class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    timestamps: true,
    tableName: "users",
    modelName: 'user',
    sequelize: db
  }
);
