const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema(
  {
    shopname: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    logoUrl: { type: String, required: true },
    design: { type: Number, required: true, default: 1 },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", ShopSchema);
