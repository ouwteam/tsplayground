import { db } from '../../config/database';
import { Model, DataTypes, Sequelize } from 'sequelize';
import User from './user';

export default class Message extends Model {}
Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    message_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message_content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now'),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now'),
      allowNull: false
    }
  },
  {
    timestamps: true,
    tableName: "messages",
    modelName: 'message',
    freezeTableName: true,
    sequelize: db
  }
);

Message.belongsTo(User, {
  foreignKey: "user_id"
});