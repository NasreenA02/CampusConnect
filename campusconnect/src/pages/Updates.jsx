import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Updates() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
  const myComplaints = complaints.filter(c => c.studentEmail === user?.email);

  const updates = myComplaints.map((c) => ({
    id: c.id,
    message: c.status === "Resolved"
      ? `✅ Your complaint "${c.title}" has been resolved.`
      : c.status === "In Progress"
      ? `🔵 Your complaint "${c.title}" is currently in progress.`
      : `🟡 Your complaint "${c.title}" is pending review.`,
    date: c.date,
    status: c.status,
  }));

  return (
    <div className="page-wrapper">
      <Header />
      <div className="inner-page">
        <button className="back-btn" onClick={() => navigate("/student")}>← Back</button>
        <h1>Updates</h1>
        <p className="inner-page-sub">Latest activity and responses on your complaints.</p>

        {updates.length === 0 ? (
          <div className="empty-box">
            <p>🔔 No updates yet. Submit a complaint to get started.</p>
            <button onClick={() => navigate("/submit-complaint")}>Submit Complaint</button>
          </div>
        ) : (
          <div className="complaint-list">
            {updates.reverse().map((u) => (
              <div key={u.id} className="complaint-card">
                <div className="complaint-top">
                  <p>{u.message}</p>
                  <span className={`status-badge ${
                    u.status === "Resolved" ? "badge-green" :
                    u.status === "In Progress" ? "badge-blue" : "badge-yellow"
                  }`}>{u.status}</span>
                </div>
                <p className="complaint-meta">🗓 {u.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Updates;