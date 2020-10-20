var express = require('express');
var router = express.Router();

var UserController = require('../controllers/UserController')

router.get('/', UserController.getUsers)

module.exports = router;