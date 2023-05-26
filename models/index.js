const User = require('./models/user');
const journal = require('./models/journal');
const mood = require('./models/mood');
const sequelize = require('./config/connection');

User.hasMany(mood, { foreignKey: 'user_id' });
mood.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(journal, { foreignKey: 'user_id' });
journal.belongsTo(User, { foreignKey: 'user_id' });

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully');
   
    

  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

module.export = {User, journal, mood};
