const router = require('express').Router();
const { User, Journal, Mood } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    if(req.session.logged_in) {
      res.render('homepage', { 
        logged_in: req.session.logged_in 
      });
    }
    res.render('login')
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
   else {
     res.render('login');
   }
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
   else {
     res.render('signup');
   }
})

module.exports = router;