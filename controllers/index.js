const router = require('express').Router();
const homeRoutes = require('./home');
const loginRoutes = require('./login.js');
const dashboardRoutes = require('./dashboard');
const apiRoutes = require('./api')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;