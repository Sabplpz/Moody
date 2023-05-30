const { Mood } = require('../models');

const moodData =
[
    {
        "date": "2023-05-25",
        "mood": "stressed"
    },
    {
        "date": "2023-05-24",
        "mood": "neutral"
    },
    {
        "date": "2023-05-23",
        "mood": "sad"
    }
];

const seedMoods = () => Mood.bulkCreate(moodData);

module.exports = seedMoods;