const router = require('express').Router();
const apiRoutes = require('./api');
const homepage = require('./homepage');
const dashboard = require('./dashboard');

router.use('/', homepage);
router.use('/dashboard', dashboard);
router.use('/api', apiRoutes);

module.exports = router;
