const router = require('express').Router();
const { User, Journal, Mood } = require('../../models');

// get one journal entry
router.get('/:user_id/:postedOn', (req, res) => {
    // find a single journal entry by its `user_id` and date
    // be sure to include its associated mood data
    Journal.findOne({
      where: {
        user_id: req.params.user_id,
        postedOn: req.params.postedOn,
      },
      include: [{ model: mood}],
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
    Journal.create(req.body)
      .then((newEntry) => {
          return ProductTag.bulkCreate(newEntry);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.put('/:id', (req, res) => {

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

module.exports = router;