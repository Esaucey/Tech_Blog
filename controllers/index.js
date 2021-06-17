const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./home');

const loginRoutes = require('./login.js');


router.use('/', homeRoutes);
// router.use('/about', aboutRoutes);

// router.use('/api', apiRoutes);
router.use('/login', loginRoutes);

module.exports = router;