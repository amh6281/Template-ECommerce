const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    businessnumber: { type: Number, index: true, sparse: true, unique: true },
    isEntrepreneur: {
      type: Boolean,
      default: function () {
        if (this.businessnumber) {
          return true;
        } else {
          return false;
        }
      },
    },
    isAdmin: { type: Boolean, default: false },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
