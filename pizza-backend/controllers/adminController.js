const Ingredient = require("../models/Ingredient");

exports.updateIngredient = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(
      req.params.id, // ID from URL
      req.body,
      { new: true }
    );
    res.json({
      success: true,
      message: "Ingredient updated successfully",
      ingredient,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error updating ingredient",
      error: err.message,
    });
  }
};

exports.getLowStock = async (req, res) => {
  const lowStock = await Ingredient.find({ stock: { $lt: 20 } });
  res.json(lowStock);
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 }) // latest orders first
      .populate('user', 'name email') // only name & email of user
      .populate('items.pizza', 'title price'); // populate pizza info

    res.status(200).json({ orders });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders', error: err });
  }
};
