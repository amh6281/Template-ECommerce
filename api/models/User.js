const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    businessnumber: { type: Number },
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
