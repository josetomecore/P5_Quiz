var express = require('express');
var {models} = require('../models/index');
var router = express.Router();
const Sequelize = require('sequelize');
const sequelize = new Sequelize("sqlite:quizzes.sqlite", {logging: false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/credits', function(req, res, next) {
  res.render('credits');
});
router.get('/quizzes', function(req, res, next) {
	
       
	
  res.render('quizzes');
});


module.exports = router;
