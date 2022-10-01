const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    shopId: { type: String },
    name: { type: String },
    paid_amount: { type: Number },
    buyer_name: { type: String },
    buyer_tel: { type: String },
    buyer_addr: { type: String },
    status: { type: String, default: "상품준비중" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
