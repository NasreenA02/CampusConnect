import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.css";

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

      <div className="dashboard">
        
        {/* Top Section */}
        <div className="dashboard-top">
          <div>
            <h1>Admin Dashboard</h1>
            <h2>Welcome, {user?.name} 👋</h2>
          </div>

          <button onClick={handleLogout}>Logout</button>
        </div>

        {/* Cards */}
        <div className="card-grid">
          <div className="card">
            <h3>Manage Complaints</h3>
            <p>View and update complaint status</p>
          </div>

          <div className="card">
            <h3>All Requests</h3>
            <p>Monitor student activity</p>
          </div>

          <div className="card">
            <h3>Lost & Found Management</h3>
            <p>Approve item reports</p>
          </div>

          <div className="card">
            <h3>System Overview</h3>
            <p>Track platform usage</p>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default AdminDashboard;