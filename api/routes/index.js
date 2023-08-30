var express = require('express');
var router = express.Router();
var { recipeCompletion } = require('../controllers/openai');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const response = await recipeCompletion(`Give me a step by step recipe that I can cook with ${req.query.ingredients}.You can assume 4 servings. Use the metric system and no volumetric units.`);
  console.log(JSON.stringify(response, undefined, 2));
  res.send(response);
  // res.sendFile('../public/index.html');
});

module.exports = router;
