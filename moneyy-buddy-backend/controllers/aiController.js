import OpenAI from "openai";

export const getBuddyAdvice = async (req, res) => {
  const openai = new OpenAI({
    OPENAI_API_KEY: process.env.OPENAI_API_KEY, // keep secure via .env
  });

  const { income, expenses, savingsGoal } = req.body;

  const prompt = `
You are Buddy, a warm and understanding financial coach for neurodivergent users.
Explain financial insights gently and clearly based on these values:

- Income: $${income}
- Expenses: $${expenses}
- Savings Goal: $${savingsGoal}

Offer 1 gentle suggestion for saving, 1 easy budgeting tip, and 1 helpful question they could ask their Onpoint advisor.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // You can switch to "gpt-4o-mini" if desired
      messages: [{ role: "user", content: prompt }],
      // store: true, // Optional: only if you use assistant threads or logs
    });

    const reply = completion.choices?.[0]?.message?.content || "No response from Buddy.";
    res.json({ response: reply });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "OpenAI request failed" });
  }
};