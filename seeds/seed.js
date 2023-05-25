const sequelize = require('../config/connection');
const { User, Mood, Journal } = require('../models');

const userData = require('./userData.json');
const moodData = require('./moodData.json');
const journalData = require('./journalData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const mood of moodData) {
        await Mood.create({
            ...mood,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0)
};

seedDatabase();