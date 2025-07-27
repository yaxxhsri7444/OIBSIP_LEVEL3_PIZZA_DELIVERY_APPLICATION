const Order = require("../models/order");

exports.placeOrder = async (req, res) => {
  const { pizzaId, amountPaid } = req.body;
  try {
    const order = await Order.create({
      userId: req.user._id,
      pizzaId,
      amountPaid,
      paymentStatus: "paid",
    });
    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message,
    });
  }
};

exports.updateStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
        res.json({order, success: true, message: "Order status updated successfully"});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update order status",
            error: error.message,});
    }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate("pizzaId");
    res.json({
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
}
