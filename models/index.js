const User = require('./User');
const Journal = require('./Journal');
const Mood = require('./Mood');
const sequelize = require('../config/connection');

User.hasMany(Mood, { foreignKey: 'user_id' });
Mood.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Journal, { foreignKey: 'user_id' });
Journal.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {User, Journal, Mood};
