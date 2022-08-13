const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema(
  {
    entrepreneurId: { type: String, required: true },
    shopname: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    category: { type: Number, required: true },
    logo: { type: String, required: true },
    design: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", ShopSchema);
