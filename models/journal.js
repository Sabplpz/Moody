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
    gratitude: {
      type: DataTypes.STRING,
    },
    great_day: {
      type: DataTypes.STRING,
    },
    affirmation: {
      type: DataTypes.STRING,
    },
    highlights: {
      type: DataTypes.STRING,
    },
    lesson: {
      type: DataTypes.STRING,
    },
    mood: {
      type: DataTypes.STRING,
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
