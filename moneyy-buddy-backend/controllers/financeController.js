import Finance from "../models/Finance.js";

export const getFinanceData = async (req, res) => {
  try {
    const data = await Finance.findOne({ userId: req.user.userId }) || {
      income: 1100,
      expenses: 850,
      savingsGoal: 300,
    };

    const suggestions = {
      budgeting: "You could try the 50/30/20 method as a gentle framework.",
      saving: "Set aside $10 every Friday into a separate ‘Just for Me’ account.",
      investing: "Buddy suggests exploring low-risk starter portfolios.",
    };

    res.json({ data, suggestions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};