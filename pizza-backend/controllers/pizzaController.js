const Ingredient = require("../models/Ingredient");
const Pizza = require("../models/Pizza");

exports.createPizza = async (req, res) => {
  try {
    const { Ingredient } = req.body;

    if (!Ingredient || !Array.isArray(Ingredient) || Ingredient.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide at least one ingredient",
      });
    }

    const cleanIngredient = Ingredient.filter((i) => typeof i === "string").map(
      (i) => i.trim()
    );

    const allIngredients = await Ingredient.find({});
    const availableIngredientNames = allIngredients.map((i) =>
      i.name.toLowerCase()
    );

    const missingIngredients = cleanedIngredients.filter(
      (ing) => !availableIngredientNames.includes(ing)
    );

    if (missingIngredients.length > 0) {
      return res.status(400).json({
        msg: "Some ingredients not found in DB",
        missing: missingIngredients,
      });
    }

    // ✅ Create new pizza
    const newPizza = new Pizza({
      ingredients: cleanedIngredients,
      price,
      createdAt: new Date(),
    });

    await newPizza.save();

    res
      .status(201)
      .json({ msg: "Pizza order placed successfully!", pizza: newPizza });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create pizza",
      error: error.message,
    });
  }
};

exports.getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find({}).populate("ingredients");
    res.status(200).json({
      success: true,
      pizzas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch pizzas",
      error: error.message,
    });
  }
};

exports.getmyorders = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming user ID is stored in req.user
    const orders = await Order.find({ user: userId }).populate("pizza");

    if (!orders || orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No orders found for this user",
      });
    }

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};
