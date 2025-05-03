const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  ingredients: [String],
  steps: [String],
  category: String,
  eventTags: [String],
  prepTime: Number,
  servings: Number,
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  imageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
