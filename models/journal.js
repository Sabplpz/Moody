// Journal.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Journal = sequelize.define('Journal', {
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
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'journal',
});

module.exports = Journal;
