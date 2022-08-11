const mongoose = require("mongoose");

const EntrepreneurSchema = new mongoose.Schema(
  {
    businessnumber: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Entrepreneur", EntrepreneurSchema);
