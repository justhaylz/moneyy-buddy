import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrepOnpoint from "./pages/PrepOnpoint";
import Dashboard from "./components/Dashboard";
import BuddyBot from "./components/BuddyBot";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-softSand text-gray-800 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<BuddyBot />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/prep" element={<PrepOnpoint />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;