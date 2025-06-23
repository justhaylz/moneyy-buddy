import { useState } from "react";

function BuddyBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi, I’m Buddy 👋 How can I support you today?" },
  ]);
  const [input, setInput] = useState("");

  const speak = (text) => {
    const voice = new SpeechSynthesisUtterance(text);
    voice.lang = "en-NZ";  //Optional: warm kiwi accent
    window.speechSynthesis.speak(voice);
  };

  const mockFinance = {
    income: 1200,
    expenses: 950,
    savingsGoal: 300,
  };

  const getBuddyAdvice = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/ai/buddy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(mockFinance),
      });

      const data = await res.json();
      return data.response;
    } catch (err) {
      console.error("BuddyBot error:", err);
      return "Oops! Buddy had a brain freeze. Try again soon.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    const buddyReply = await getBuddyAdvice();
    setMessages((prev) => [...prev, { from: "bot", text: buddyReply }]);
    speak(buddyReply);
    setInput("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <div className="bg-white p-4 rounded shadow h-[400px] overflow-y-auto">
        {messages.map((msg, i) => (
          <p
            key={i}
            className={`mb-2 ${
              msg.from === "bot" ? "text-calmGreen" : "text-mutedBlue"
            }`}
          >
            <strong>{msg.from === "bot" ? "Buddy:" : "You:"}</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-calmGreen text-white rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default BuddyBot;