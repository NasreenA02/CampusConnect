import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AdminDashboard() {
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
            <h1>Admin Dashboard</h1>
            <h2>Welcome, {user?.name} 👋</h2>
          </div>

          {/* Logout Button */}
          <button onClick={handleLogout}>Logout</button>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "30px"
        }}>

          <div style={cardStyle}>
            <h3>Manage Complaints</h3>
            <p>View and update complaint status</p>
          </div>

          <div style={cardStyle}>
            <h3>All Requests</h3>
            <p>Monitor all student activities</p>
          </div>

          <div style={cardStyle}>
            <h3>Lost & Found Management</h3>
            <p>Approve and manage item reports</p>
          </div>

          <div style={cardStyle}>
            <h3>System Overview</h3>
            <p>Track platform usage</p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: "#f9f9f9"
};

export default AdminDashboard;