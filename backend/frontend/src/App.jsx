import { useState } from "react";
import axios from "axios";

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
        setMessage("Login successful");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  if (token) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>AI Placement Mentor</h1>
        <h2>Student Dashboard</h2>

        <p>Welcome to your placement preparation dashboard.</p>

        <div>
          <h3>Your Features</h3>
          <ul>
            <li>Profile Builder</li>
            <li>Placement Roadmap</li>
            <li>Resume Checklist</li>
            <li>Progress Tracker</li>
          </ul>
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
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Placement Mentor</h1>

      <h2>{isLogin ? "Login" : "Signup"}</h2>

      {!isLogin && (
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <br />
      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        {isLogin ? "Login" : "Signup"}
      </button>

      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{ marginLeft: "10px" }}
      >
        {isLogin ? "Go to Signup" : "Go to Login"}
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;