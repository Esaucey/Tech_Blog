const router = require('express').Router();

// const apiRoutes = require('./api/');
const homeRoutes = require('./home');
const dashboardRoutes = require('./about');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
// router.use('/api', apiRoutes);

module.exports = router;