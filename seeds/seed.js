const sequelize = require('../config/connection');

const userData = require('./userData.js');
// const moodData = require('./moodData.js');
const journalData = require('./journalData.js');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n------ DATABASE SYNCED ------\n');

    await userData();
    console.log('\n------ USERS SEEDED ------\n');

    await journalData();
    console.log('\n------ JOURNALS SEEDED ------\n');

    // await moodData();
    // console.log('\n------ MOODS SEEDED ------\n');

    process.exit(0)
};

seedDatabase();