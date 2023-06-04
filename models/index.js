const User = require('./User');
const Journal = require('./journal');
const sequelize = require('../config/connection');

User.hasMany(Journal, { foreignKey: 'user_id' });
Journal.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {User, Journal};
