const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  base: String,
  sauce: String,
  cheese: String,
  veggies: [String],
  meat: [String],
  totalPrice: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Pizza', pizzaSchema);
