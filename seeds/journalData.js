const { Journal } = require('../models');

const journalData =
[
    {
        gratitude: "My dog",
        great_day: "Rockville tickets",
        affirmation: "affirmation!",
        highlights: "My iced brown sugar espresso",
        lesson: "Don't underestimate the neighborhood peacocks",
        mood: "sad",
        user_id: 2
    },
    {
        gratitude: "1. Concerts exist 2. So does rock climbing 3. And matcha tea",
        great_day: "1. A Matcha latte 2. An hour to play videogames 3. Rockville tickets",
        affirmation: "I finish what matters and let go of what does not.",
        highlights: "1. Cool evening weather walking my dog 2. No meetings 3. New Ted Lasso episode",
        lesson: "Patience is key",
        mood: "happy",
        user_id: 1
    },
    {
        gratitude: "1. Concerts exist 2. So does rock climbing 3. And matcha tea",
        great_day: "1. A Matcha latte 2. An hour to play videogames 3. Rockville tickets",
        affirmation: "I finish what matters and let go of what does not.",
        highlights: "1. Cool evening weather walking my dog 2. No meetings 3. New Ted Lasso episode",
        lesson: "Patience is annoying, but necessary",
        mood: "annoyed",
        user_id: 3
    }
];

const seedJournal = () => Journal.bulkCreate(journalData);

module.exports = seedJournal;