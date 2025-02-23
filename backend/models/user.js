const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  currency: { type: String, default: "USD" },
  createdAt: { type: Date, default: Date.now }
});

const user = mongoose.model("User", userSchema);

export default user;