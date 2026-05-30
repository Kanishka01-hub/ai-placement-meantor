import React, { useState } from "react";
import axios from "axios";

import Dashboard from "./pages/Dashboard";
import ResumeChecklist from "./pages/ResumeChecklist";
import Roadmap from "./pages/Roadmap";
import ProgressTracker from "./pages/ProgressTracker";
import CompanyTracker from "./pages/CompanyTracker";
import ProfileBuilder from "./pages/ProfileBuilder";

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
      <div style={styles.authPage}>
        <div style={styles.authCard}>
          <h1 style={styles.title}>AI Placement Mentor</h1>
          <p style={styles.subtitle}>
            Your personal placement preparation dashboard
          </p>

          <h2>{isLogin ? "Login" : "Signup"}</h2>

          {!isLogin && (
            <input
              style={styles.input}
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.primaryBtn} onClick={handleSubmit}>
            {isLogin ? "Login" : "Signup"}
          </button>

          <button style={styles.secondaryBtn} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create Account" : "Back to Login"}
          </button>

          <p>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <Dashboard />
      </div>

      <div style={styles.card}>
        <ResumeChecklist />
      </div>

      <div style={styles.card}>
        <Roadmap />
      </div>

      <div style={styles.card}>
        <ProgressTracker />
      </div>

      <div style={styles.card}>
        <CompanyTracker />
      </div>

      <div style={styles.card}>
        <ProfileBuilder />
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          style={styles.logoutBtn}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  authPage: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #2563eb, #9333ea)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },
  authCard: {
    background: "white",
    padding: "40px",
    borderRadius: "18px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    color: "#1e293b",
  },
  subtitle: {
    color: "#64748b",
  },
  input: {
    width: "90%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
  },
  primaryBtn: {
    padding: "12px 25px",
    margin: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "12px 25px",
    margin: "10px",
    backgroundColor: "#e5e7eb",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  container: {
    backgroundColor: "#f4f7fb",
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "Arial",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    marginBottom: "30px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  logoutBtn: {
    padding: "12px 25px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;