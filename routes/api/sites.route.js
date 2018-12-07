var express = require('express');
var router = express.Router();

var SiteController = require('../../controllers/site.controller');

router.get('/',SiteController.getSites);
router.post('/',SiteController.createSites);
router.put('/',SiteController.updateSites);
router.delete('/:id',SiteController.deleteSites);

module.exports = router;
