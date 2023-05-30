const router = require('express').Router();
const { User, Journal, Mood } = require('../../models');

// get one journal entry
router.get('/:postedOn', (req, res) => {
  // find a single journal entry by its `user_id` and date
  // be sure to include its associated mood data
  Journal.findOne({
    where: {
      user_id: req.session.user_id,
      postedOn: req.params.postedOn,
    },
    include: [{ model: mood }],
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
        gratitude: "My dog",
        great_day: "Rockville tickets",
        affirmation: "affirmation!",
        highlights: "My iced brown sugar espresso",
        lesson: "Don't underestimate the neighborhood peacocks"
      }
  */
  Journal.create(req.body)
    .then((newEntry) => {
      return Journal.bulkCreate(newEntry);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  /* req.body should look like this...
      {
        gratitude: "My dog",
        great_day: "Rockville tickets",
        affirmation: "affirmation!",
        highlights: "My iced brown sugar espresso",
        lesson: "Don't underestimate the neighborhood peacocks"
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