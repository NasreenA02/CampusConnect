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

    // Get existing students
    const students = JSON.parse(localStorage.getItem("students")) || [];

    // Create new student
    const newStudent = {
      name,
      email,
      studentId,
      password,
      role: "student"
    };

    // Save updated list
    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration successful!");

    // Redirect to login
    navigate("/login");
  };

  return (
    <>
      <Header />

       <main style={{ flex: 1, display: "flex", alignItems: "center" }}>
    <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
        {/* LEFT SIDE */}
        <div>
          <h2>Join CampusConnect</h2>
          <p>Create your account to manage complaints and lost items.</p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3>Register</h3>

          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <input
            type="text"
            placeholder="Student ID"
            onChange={(e) => setStudentId(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button onClick={handleRegister}>Register</button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
</main>
      <Footer />
    </>
  );
}

export default Register;