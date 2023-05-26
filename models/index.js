const User = require('./User');
const Journal = require('./journal');
const Mood = require('./mood');
const sequelize = require('../config/connection');

User.hasMany(Mood, { foreignKey: 'user_id' });
Mood.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Journal, { foreignKey: 'user_id' });
Journal.belongsTo(User, { foreignKey: 'user_id' });

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully');
   
    

  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

module.export = {User, Journal, Mood};
