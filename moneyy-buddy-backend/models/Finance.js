import mongoose from "mongoose";

const financeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  income: Number,
  expenses: Number,
  savingsGoal: Number,
});

const Finance = mongoose.model("Finance", financeSchema);
export default Finance;