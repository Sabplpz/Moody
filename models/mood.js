const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Mood extends Model {
}

Mood.init(
  {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mood: {
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
  journal_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'journal',
      key: 'id',
    },
  },
}, 
{
sequelize,
timestamps: true,
freezeTableName: true,
underscored: true,
modelName: 'mood',
});


module.exports = Mood;
