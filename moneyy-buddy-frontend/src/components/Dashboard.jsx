function Dashboard() {
  const mockIncome = 1200;
  const mockExpenses = 800;
  const mockSuggestion = "Consider setting aside $50/week into a savings booster.";

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Your Financial Snapshot</h2>
      <ul className="mt-4 space-y-2">
        <li>💰 Income: ${mockIncome}</li>
        <li>📉 Expenses: ${mockExpenses}</li>
        <li>💡 Suggestion: {mockSuggestion}</li>
      </ul>
      <a
        href="/chat"
        className="mt-6 inline-block bg-mutedBlue text-white px-4 py-2 rounded"
      >
        Talk to Buddy About These
      </a>
    </div>
  );
}

export default Dashboard;