const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ["income", "expense"], required: true }
});

const category = mongoose.model("Category", categorySchema);

export default category;