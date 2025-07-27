const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ['base', 'sauce', 'cheese', 'veggie', 'meat'] },
  price: Number,
  stock: Number,
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
