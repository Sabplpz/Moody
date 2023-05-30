const router = require('express').Router();
const { User, Journal, Mood } = require('../../models');

// get one journal entry
router.get('/:postedOn', (req, res) => {
    // find a single journal entry by its `user_id` and date
    // be sure to include its associated mood data
    Mood.findOne({
        where: {
            user_id: req.session.user_id,
            postedOn: req.params.postedOn,
        },
    })
        .then((entry) => res.json(entry))
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
});

router.post('/', (req, res) => {
    /* req.body should look like this...
    {
    "title": "example title",
    "entryText": "Example text",
    "user_id": 3,
    "createdAt": 2023-25-05
    }
    */
    Mood.create(req.body)
        .then((newMood) => {
            return Mood.bulkCreate(newMood);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {

    Mood.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((updatedEntry) => res.status(200).json(updatedEntry))
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
});

module.exports = router;