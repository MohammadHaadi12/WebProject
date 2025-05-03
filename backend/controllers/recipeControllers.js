const Recipe = require('../models/recipe');

exports.addRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      steps,
      category,
      eventTags,
      prepTime,
      servings,
      difficulty,
      imageUrl 
    } = req.body;

    const recipe = new Recipe({
      title,
      description,
      ingredients: JSON.parse(ingredients),
      steps: JSON.parse(steps),
      category,
      eventTags: JSON.parse(eventTags),
      prepTime,
      servings,
      difficulty,
      imageUrl
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find().sort({ createdAt: -1 });
  res.json(recipes);
};
