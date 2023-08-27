var express = require('express');
var router = express.Router();
var { recipeCompletion } = require('../controllers/openai');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const response = await recipeCompletion("Give me a step by step recipe that I can cook with tomatoes, chicken breast, dry garlic, salt, pepper, milk and mayonaise in portuguese and with portions in grams");
  console.log(JSON.stringify(response, undefined, 2));
  res.render('index', { title: response });
});

module.exports = router;
