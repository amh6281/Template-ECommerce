const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    shopId: { type: String },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    paid_amount: { type: Number },
    buyer_addr: { type: String },
    status: { type: String, default: "상품준비중" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
