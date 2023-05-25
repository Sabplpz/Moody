const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mood_tracker', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
