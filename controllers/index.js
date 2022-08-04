const router = require('express').Router();

const apiRoutes = require('./api');
const hompage = require('./homepage');

router.use('/', hompage);
router.use('/api', apiRoutes);

module.exports = router;
