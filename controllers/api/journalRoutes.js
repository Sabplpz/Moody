const router = require('express').Router();
const { User, Journal, Mood } = require('../../models');
const withAuth = require('../../utils/auth');

// get one journal entry
router.get('/:id', (req, res) => {
  // find a single journal entry by its `user_id` and date
  // be sure to include its associated mood data
  console.log(req.session);
  Journal.findOne({
    where: {
      user_id: req.session.user_id,
      id: req.params.id,
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
        "gratitude": "My dog",
        "great_day": "Rockville tickets",
        "affirmation": "affirmation!",
        "highlights": "My iced brown sugar espresso",
        "lesson": "Don't underestimate the neighborhood peacocks",
				"user_id": 1
      }
  */
  Journal.create(req.body)
    .then((newEntry) => {res.status(201).json(newEntry)})
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  /* req.body should look like this...
      {
        "gratitude": "My dog",
        "great_day": "Rockville tickets",
        "affirmation": "affirmation!",
        "highlights": "My iced brown sugar espresso",
        "lesson": "Don't underestimate the neighborhood peacocks",
				"user_id": 1
      }
  */
  Journal.update(req.body, {
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

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const journalData = await Journal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(journalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;