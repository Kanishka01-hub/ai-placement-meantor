import { useState } from "react";
import axios from "axios";

import ResumeChecklist from "./pages/ResumeChecklist";
import Roadmap from "./pages/Roadmap";
import ProgressTracker from "./pages/ProgressTracker";
import CompanyTracker from "./pages/CompanyTracker";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("kanishka@gmail.com");
  const [password, setPassword] = useState("123456");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/signup";

      const data = isLogin
        ? { email, password }
        : { name, email, password };

      const res = await axios.post(url, data);

      setMessage(res.data.message);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  if (token) {
    return (
      <div className="container">
        <h1>AI Placement Mentor</h1>

        <div className="card">
          <h2>Student Dashboard</h2>
          <p>Welcome to your placement preparation dashboard.</p>

          <div className="feature-grid">
            <div className="card">
              <h3>Profile Builder</h3>
            </div>

            <div className="card">
              <h3>Placement Roadmap</h3>
            </div>

            <div className="card">
              <h3>Resume Checklist</h3>
            </div>

            <div className="card">
              <h3>Progress Tracker</h3>
            </div>
          </div>
        </div>

        <div className="card">
          <ResumeChecklist />
        </div>

        <div className="card">
          <Roadmap />
        </div>

        <div className="card">
          <ProgressTracker />
        </div>

        <div className="card">
          <CompanyTracker />
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>AI Placement Mentor</h1>

        <h2>{isLogin ? "Login" : "Signup"}</h2>

        {!isLogin && (
          <>
            <input
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <br />
            <br />
          </>
        )}

        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Signup"}
        </button>

        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Go to Signup" : "Go to Login"}
        </button>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;