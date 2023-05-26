const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');


const Entry = sequelize.define('Entry', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  mood: {
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
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'mood',
});


module.exports = mood;
