const router = require('express').Router();
const { User, Journal } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });

    const user = userData.get({ plain: true });

    // Pass serialized data and session flag into template
    if (req.session.logged_in) {
      res.render('homepage', {
        ...user,
        logged_in: req.session.logged_in
      });
    } else {
      res.redirect('login')
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newjournal', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });

    const user = userData.get({ plain: true });

    res.render('journal', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/prevjournal/:id', withAuth, async (req, res) => {
  try {
    const journalData = await Journal.findOne({
      where: {
        user_id: req.session.user_id,
        id: req.params.id,
      },
      include: [{model: User, attributes: { exclude: ['password'] }}]
    });

    const journal = journalData.get({ plain: true });
    

    res.render('prevJournal', {
      ...journal,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/prevjournal/edit/:id', withAuth, async (req, res) => {
  try {
    const journalData = await Journal.findOne({
      where: {
        user_id: req.session.user_id,
        id: req.params.id,
      },
      include: [{model: User, attributes: { exclude: ['password'] }}]
    });

    const journal = journalData.get({ plain: true });

    res.render('editJournal', {
      ...journal,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  else {
    res.render('login');
  }
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  else {
    res.render('login');
  }
})

module.exports = router;