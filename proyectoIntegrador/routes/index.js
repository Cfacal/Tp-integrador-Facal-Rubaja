var express = require('express');
var router = express.Router();
const indexControllers = require('../controllers/indexController');

router.get('', indexControllers.index);
router.post('', indexControllers.logout);

module.exports = router;
