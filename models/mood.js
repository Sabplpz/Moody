const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Entry = sequelize.define('Entry', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  mood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  entryText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Entry;
