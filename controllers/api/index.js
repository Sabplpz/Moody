const router = require('express').Router();
const userRoutes = require('./userRoutes');
const journalRoutes = require('./journalRoutes');
const moodRoutes = require('./moodRoutes');

router.use('/users', userRoutes);
router.use('/journal', journalRoutes);
router.use('/mood', moodRoutes);

module.exports = router;
