const { Mood } = require('../models');

const moodData =
[
    {
        mood: "stressed",
        user_id: 1
    },
    {
        mood: "neutral",
        user_id: 2
    },
    {
        mood: "sad",
        user_id: 1
    }
];

const seedMoods = () => Mood.bulkCreate(moodData);

module.exports = seedMoods;