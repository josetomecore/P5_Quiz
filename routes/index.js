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
	
       quizzes=[
      { question:"capital de italia", answer:"roma"},
       {
    

      question:"capital de francia", answer:"paris"
  },
  {
    question:"capital de españa", answer:"madrid"
  },
  {
    question:"capital de portugal", answer:"lisboa"
  }

])
	
  res.render('quizzes', {quizzes});
});


module.exports = router;
