const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    shopId: { type: String, required: true },
    products: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
