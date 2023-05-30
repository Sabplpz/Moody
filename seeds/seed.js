const userData = require('./userData');
const journalData = require('./journalData');
const moodData = require('./moodData');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n------ DATABASE SYNCED ------\n');

    await userData();
  console.log('\n------ USERS SEEDED ------\n');

    await journalData();
    console.log('\n------ JOURNALS SEEDED ------\n');

    await moodData();
    console.log('\n------ MOODS SEEDED ------\n');

    process.exit(0)
};

seedDatabase();