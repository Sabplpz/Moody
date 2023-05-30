// Journal.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model {
}

Journal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entryText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  }, 
  {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'journal',
});

module.exports = Journal;
