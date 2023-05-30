const { Mood } = require('../models');

const moodData =
[
    {
        mood: "stressed"
    },
    {
        mood: "neutral"
    },
    {
        mood: "sad"
    }
];

const seedMoods = () => Mood.bulkCreate(moodData);

module.exports = seedMoods;