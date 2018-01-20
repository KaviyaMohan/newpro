var express = require('express');
var router = express.Router();

var moviesController=require('../controllers/moviesController');
router.get('/all',moviesController.getAllMovies);

module.exports = router;
