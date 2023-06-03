const { Mood } = require('../models');

const moodData =
[
    {
        mood: "stressed",
        user_id: 1,
        journal_id: 2
    },
    {
        mood: "neutral",
        user_id: 2,
        journal_id: 1
    },
    {
        mood: "sad",
        user_id: 3,
        journal_id: 3
    }
];

const seedMoods = () => Mood.bulkCreate(moodData);

module.exports = seedMoods;