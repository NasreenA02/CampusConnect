import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function TrackComplaints() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
  const myComplaints = complaints.filter(c => c.studentEmail === user?.email);

  const statusColor = (status) => {
    if (status === "Resolved") return "badge-green";
    if (status === "In Progress") return "badge-blue";
    return "badge-yellow";
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="inner-page">
        <button className="back-btn" onClick={() => navigate("/student")}>← Back</button>
        <h1>My Complaints</h1>
        <p className="inner-page-sub">Track the status of all your submitted complaints.</p>

        {myComplaints.length === 0 ? (
          <div className="empty-box">
            <p>📭 No complaints submitted yet.</p>
            <button onClick={() => navigate("/submit-complaint")}>Submit One Now</button>
          </div>
        ) : (
          <div className="complaint-list">
            {myComplaints.reverse().map((c) => (
              <div key={c.id} className="complaint-card">
                <div className="complaint-top">
                  <div>
                    <h3>{c.title}</h3>
                    <p className="complaint-meta">📁 {c.category} · 📍 {c.location} · 🗓 {c.date}</p>
                  </div>
                  <span className={`status-badge ${statusColor(c.status)}`}>{c.status}</span>
                </div>
                <p className="complaint-desc">{c.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TrackComplaints;