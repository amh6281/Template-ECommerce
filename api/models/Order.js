const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    name: { type: String },
    paid_amount: { type: Number },
    buyer_name: { type: String },
    buyer_tel: { type: String },
    buyer_addr: { type: String },
    status: { type: String, default: "상품준비중" },
    custom_data: [
      {
        shopId: { type: String },
        price: { type: Number },
        title: { type: String },
        img: { type: String },
        buyer_name: { type: String },
        buyer_addr: { type: String },
        status: { type: String, default: "상품준비중" },
        date: { type: String },
        userId: { type: String },
        productId: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
