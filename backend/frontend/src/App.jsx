import { useState } from "react";
import axios from "axios";

import Dashboard from "./pages/Dashboard";
import ResumeChecklist from "./pages/ResumeChecklist";
import Roadmap from "./pages/Roadmap";
import ProgressTracker from "./pages/ProgressTracker";
import CompanyTracker from "./pages/CompanyTracker";
import ProfileBuilder from "./pages/ProfileBuilder";
import ResumeUpload from "./pages/ResumeUpload";

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

      const data = isLogin ? { email, password } : { name, email, password };

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

  if (!token) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #2563eb, #9333ea)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "18px",
            width: "380px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          <h1 style={{ color: "#1e293b" }}>AI Placement Mentor</h1>

          <p style={{ color: "#64748b" }}>
            Your personal placement preparation dashboard
          </p>

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
            {isLogin ? "Create Account" : "Back to Login"}
          </button>

          <p>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <Dashboard />
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

      <div className="card">
        <ProfileBuilder />
      </div>

      <div className="card">
        <ResumeUpload />
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

export default App;