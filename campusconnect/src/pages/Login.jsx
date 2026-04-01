import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const validUser = students.find((u) => u.email === email && u.password === password);
    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      navigate("/student");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-left">
            <h2>Welcome Back!</h2>
            <p>Login to access your dashboard, track complaints and manage lost items.</p>
          </div>
          <div className="auth-divider" />
          <div className="auth-right">
            <h3>Login</h3>
            <label className="auth-label">Email</label>
            <input type="email" placeholder="Enter Email" value={email}
              onChange={(e) => setEmail(e.target.value)} className="auth-input" />
            <label className="auth-label">Password</label>
            <input type="password" placeholder="Enter Password" value={password}
              onChange={(e) => setPassword(e.target.value)} className="auth-input" />
            <button className="auth-button" onClick={handleLogin}>Login</button>
            <p className="auth-link-text">
              New here? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Login;