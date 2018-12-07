var express = require('express');
var router = express.Router();
var sites = require('./api/sites.route');

router.use('/sites',sites);

module.exports = router;