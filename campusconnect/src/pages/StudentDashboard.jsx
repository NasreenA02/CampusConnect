import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function StudentDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <>
      <Header />

      <div style={{ padding: "30px" }}>
        
        {/* Top Section */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h1>Student Dashboard</h1>
            <h2>Welcome, {user?.name} 👋</h2>
          </div>

          <button onClick={handleLogout}>Logout</button>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={cardStyle}>
            <h3>Submit Complaint</h3>
            <p>Report campus issues</p>
          </div>

          <div style={cardStyle}>
            <h3>Track Complaints</h3>
            <p>Check complaint status</p>
          </div>

          <div style={cardStyle}>
            <h3>Lost & Found</h3>
            <p>Report or find items</p>
          </div>

          <div style={cardStyle}>
            <h3>Updates</h3>
            <p>View responses</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

// Simple card style
const cardStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
};

export default StudentDashboard;