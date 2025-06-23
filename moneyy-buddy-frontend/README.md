# 💚 Moneyy Buddy

Moneyy Buddy is a warm, neurodivergent-friendly financial chatbot designed to support users with empathy, clarity, and calm. Built with accessibility in mind, it offers budgeting tips, savings guidance, and thoughtful conversation tailored for real humans—not just numbers.

## ✨ Why It Exists

For many, managing money is overwhelming—especially for neurodivergent individuals. Moneyy Buddy simplifies financial planning with gentle language, inclusive design, and a personality that feels more like a coach than a calculator. It’s finance with a human touch.

## 🧠 Features

- 💬 **Empathetic Conversational AI** using OpenAI GPT-4o
- 🔐 Secure user authentication with JWT + bcrypt
- 📊 Smart budgeting advice based on income, expenses & goals
- 🧏‍♀️ Accessibility-first voice support via Web Speech API (NZ English)
- 🌱 Local MongoDB storage with Mongoose models
- 🧪 Postman-ready API testing with protected routes
- 🎨 Soothing UI design tuned for cognitive ease and comfort

## 🛠️ Tech Stack

| Layer        | Tech                            |
|-------------|----------------------------------|
| Frontend     | React.js, Tailwind CSS, SpeechSynthesis |
| Backend      | Node.js, Express.js             |
| Database     | MongoDB (local or Atlas-ready)  |
| Auth         | bcryptjs, JWT                   |
| AI           | OpenAI Node SDK (v4)            |
| Tools        | Postman, Git, .env config       |

## 🚀 Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/justhaylz/moneyy-buddy.git
   ```

2. Install backend dependencies:

   ```bash
   cd moneyy-buddy/moneyy-buddy-backend
   npm install
   ```

3. Set up your `.env` file:

   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/moneyybuddy
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxx
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Run the frontend (from the root or frontend folder):

   ```bash
   npm start
   ```

## 📬 API Endpoints

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Log in to receive JWT token
- `POST /api/ai/buddy` – Get financial advice from Buddy (protected)

## 🤖 Meet Buddy

> “Hi! I’m Buddy 👋 I’m here to help you feel confident about your money. No judgment, no jargon—just gentle support. Let’s do this together.”

## 🌍 Roadmap

- [ ] Add goal-tracking dashboard
- [ ] Personalize advice based on spending behavior
- [ ] Integrate Onpoint advisor handoff
- [ ] Dark mode & motion-reduced UI

## 🧑‍💻 Creator

Built with 💚 by [justHaylz](https://github.com/justhaylz), a developer with a passion for inclusive tech, neurodiversity advocacy, and building software that *feels* good to use.
