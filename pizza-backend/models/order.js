const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    pizzaId: { type: mongoose.Schema.Types.ObjectId, ref: "Pizza" },
    status: {
      type: String,
      enum: ["Placed", "Preparing", "Baked", "Out for Delivery"],
      default: "Placed",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "paid"],
      default: "pending",
    },

    amountPaid: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
