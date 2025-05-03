const express = require('express');
const router = express.Router();
const { addRecipe, getAllRecipes } = require('../controllers/recipeControllers');

router.post('/', addRecipe); 
router.get('/', getAllRecipes);

module.exports = router;
