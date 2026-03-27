import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.css";

function StudentDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="page-wrapper">
      <Header />

      <div className="dashboard">
        
        {/* Top Section */}
        <div className="dashboard-top">
          <div>
            <h1>Student Dashboard</h1>
            <h2>Welcome, {user?.name} 👋</h2>
          </div>

          <button onClick={handleLogout}>Logout</button>
        </div>

        {/* Cards */}
        <div className="card-grid">
          <div className="card">
            <h3>Submit Complaint</h3>
            <p>Report campus issues</p>
          </div>

          <div className="card">
            <h3>Track Complaints</h3>
            <p>Check complaint status</p>
          </div>

          <div className="card">
            <h3>Lost & Found</h3>
            <p>Report or find items</p>
          </div>

          <div className="card">
            <h3>Updates</h3>
            <p>View responses</p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default StudentDashboard;