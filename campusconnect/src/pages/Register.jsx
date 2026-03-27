import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !studentId || !password) {
      alert("Please fill all fields");
      return;
    }
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push({ name, email, studentId, password, role: "student" });
    localStorage.setItem("students", JSON.stringify(students));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-left">
            <h2>Join CampusConnect</h2>
            <p>Create your account to manage complaints, track lost items, and stay connected.</p>
          </div>
          <div className="auth-divider tall" />
          <div className="auth-right">
            <h3>Register</h3>
            <label className="auth-label">Full Name</label>
            <input type="text" placeholder="Full Name"
              onChange={(e) => setName(e.target.value)} className="auth-input" />
            <label className="auth-label">Email</label>
            <input type="email" placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} className="auth-input" />
            <label className="auth-label">Student ID</label>
            <input type="text" placeholder="Student ID"
              onChange={(e) => setStudentId(e.target.value)} className="auth-input" />
            <label className="auth-label">Password</label>
            <input type="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} className="auth-input" />
            <button className="auth-button" onClick={handleRegister}>Register</button>
            <p className="auth-link-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Register;