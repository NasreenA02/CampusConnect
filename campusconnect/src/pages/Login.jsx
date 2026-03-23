import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    // 🔴 ADMIN LOGIN
    if (email === "admin@campus.com" && password === "1234") {
      const adminData = {
        name: "Admin",
        role: "admin"
      };

      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
      navigate("/admin");
      return;
    }

    // 🟢 STUDENT LOGIN
    const students = JSON.parse(localStorage.getItem("students")) || [];

    const validUser = students.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      // Save logged-in student
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));
      navigate("/student");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Header />

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "60px" }}>
        
        {/* LEFT SIDE */}
        <div>
          <h2>Welcome Back!</h2>
          <p>Login to access your dashboard, track complaints and manage lost items.</p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3>Login</h3>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button onClick={handleLogin}>Login</button>

          <p>
            New here? <Link to="/register">Register</Link>
          </p>

          <p style={{ fontSize: "12px", marginTop: "10px" }}>
            Demo Admin: admin@campus.com / 1234
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;