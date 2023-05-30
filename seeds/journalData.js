const { Journal } = require('../models');

const journalData =
[
    {
        date: "05-25-2023",
        gratitude: "1. My dog 2. My house 3. My job",
        great_day: "1. An iced brown sugar espresso 2. A Fat Nap 3. Rockville tickets",
        Affirmation: "I have made mistakes, but I will not let them define me.",
        Highlights: "1. My iced brown sugar espresso 2. Stress-free meetings 3. Pizza for lunch",
        Lesson: "Don't underestimate the neighborhood peacocks"
    },
    {
        date: "05-24-2023",
        gratitude: "1. Concerts exist 2. So does rock climbing 3. And matcha tea",
        great_day: "1. A Matcha latte 2. An hour to play videogames 3. Rockville tickets",
        Affirmation: "I finish what matters and let go of what does not.",
        Highlights: "1. Cool evening weather walking my dog 2. No meetings 3. New Ted Lasso episode",
        Lesson: "Patience is key"
    }
];

const seedJournal = () => Journal.bulkCreate(journalData);

module.exports = seedJournal;