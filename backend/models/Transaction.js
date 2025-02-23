const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  amount: { type: Number, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
  paymentMethod: { type: String, enum: ["Cash", "Credit Card", "Bank Transfer"], default: "Cash" }
});

const transaction = mongoose.model("Transaction", transactionSchema);
 
export default transaction;