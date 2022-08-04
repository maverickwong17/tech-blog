const router = require('express').Router();
const withAuth = require('../utils/auth');

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;