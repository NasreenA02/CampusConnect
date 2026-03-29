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

  // Complaint counts from localStorage
  const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
  const myComplaints = complaints.filter(c => c.studentEmail === user?.email);
  const pending = myComplaints.filter(c => c.status === "Pending").length;
  const resolved = myComplaints.filter(c => c.status === "Resolved").length;

  // Get time-based greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="page-wrapper">
      <Header />

      <div className="dashboard">

        {/* TOP */}
        <div className="dashboard-top">
          <div>
            <p className="dashboard-greeting">{greeting} 👋</p>
            <h1>Welcome, {user?.name}</h1>
            <p className="dashboard-sub">Student ID: {user?.studentId} · {user?.email}</p>
          </div>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

        {/* STAT BADGES */}
        <div className="dashboard-stats">
          <div className="dash-stat">
            <span>{myComplaints.length}</span>
            <p>Total Complaints</p>
          </div>
          <div className="dash-stat">
            <span className="yellow">{pending}</span>
            <p>Pending</p>
          </div>
          <div className="dash-stat">
            <span className="green">{resolved}</span>
            <p>Resolved</p>
          </div>
        </div>

        {/* CARDS */}
        <div className="card-grid">
          <div className="dash-card" onClick={() => navigate("/submit-complaint")}>
            <div className="dash-card-icon">📋</div>
            <h3>Submit Complaint</h3>
            <p>Report campus issues like electricity, cleanliness or water supply</p>
            <span className="dash-card-link">Go →</span>
          </div>

          <div className="dash-card" onClick={() => navigate("/track-complaints")}>
            <div className="dash-card-icon">📊</div>
            <h3>Track Complaints</h3>
            <p>Check the live status of your submitted complaints</p>
            <span className="dash-card-link">Go →</span>
          </div>

          <div className="dash-card" onClick={() => navigate("/lost-found")}>
            <div className="dash-card-icon">🔍</div>
            <h3>Lost & Found</h3>
            <p>Report a lost item or browse found items on campus</p>
            <span className="dash-card-link">Go →</span>
          </div>

          <div className="dash-card" onClick={() => navigate("/updates")}>
            <div className="dash-card-icon">🔔</div>
            <h3>Updates</h3>
            <p>View latest responses and activity on your complaints</p>
            <span className="dash-card-link">Go →</span>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default StudentDashboard;