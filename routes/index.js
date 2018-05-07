var express = require('express');
var {models} = require('../models/index');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/credits', function(req, res, next) {
  res.render('credits');
});
router.get('/quizzes', function(req, res, next) {
	quizzes =[
      { question:"Pregunta numero 1", answer:"roma"},
       {
    

      question:"Pregunta numero 2", answer:"paris"
  },
  {
    question:"Pregunta numero 3", answer:"madrid"
  },
  {
    question:"Pregunta numero 4", answer:"lisboa"
  }

];
  res.render('quizzes', {quizzes});
});


module.exports = router;
