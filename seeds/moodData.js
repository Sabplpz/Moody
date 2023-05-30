const { Mood } = require('../models');

const moodData =
[
    {
        "createdAt": "2023-05-25",
        "mood": "stressed"
    },
    {
        "createdAt": "2023-05-24",
        "mood": "neutral"
    },
    {
        "createdAt": "2023-05-23",
        "mood": "sad"
    }
];

const seedMoods = () => Mood.bulkCreate(moodData);

module.exports = seedMoods;