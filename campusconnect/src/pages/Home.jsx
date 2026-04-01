import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const reviews = [
    {
      id: 1,
      name: "Arjun Mehta",
      branch: "Computer Science, 3rd Year",
      review: "Found my lost ID card within 2 days of reporting! The Lost & Found feature is incredibly useful.",
      avatar: "AM",
    },
    {
      id: 2,
      name: "Priya Sharma",
      branch: "Electronics, 2nd Year",
      review: "Submitted a complaint about the broken AC in our lab. It was fixed within a week. Amazing platform!",
      avatar: "PS",
    },
    {
      id: 3,
      name: "Rahul Verma",
      branch: "Mechanical, 4th Year",
      review: "Tracking complaint status in real time is so convenient. No need to visit the admin office anymore.",
      avatar: "RV",
    },
    {
      id: 4,
      name: "Sneha Patil",
      branch: "Civil Engineering, 2nd Year",
      review: "The interface is so clean and easy to use. Every student should have access to this system.",
      avatar: "SP",
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />

      <main className="home">

        {/* HERO */}
        <section className="hero-center">
          <p className="hero-badge">🎓 Smart Campus Support</p>
          <h1 className="hero-title">Griev<span className="gradient-text">Ease</span></h1>
          <p className="hero-subtitle">Report. Track. Resolve — all in one place.</p>
          <button className="glow-btn" onClick={() => navigate("/login")}>
            Get Started →
          </button>
        </section>

        {/* STATS BAR */}
        <section className="stats-bar">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Students Registered</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <h3>200+</h3>
            <p>Complaints Resolved</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <h3>50+</h3>
            <p>Lost Items Found</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </section>

        {/* FEATURES + IMAGE */}
        <section className="hero-bottom">
          <div className="glass-card feature-card">
            <h3>✨ Features</h3>
            <ul>
              <li>📋 Complaint Management</li>
              <li>🔍 Lost & Found</li>
              <li>📊 Track Status</li>
              <li>🔔 Real-time Updates</li>
            </ul>
          </div>
          <div className="glass-card image-card">
            <img
              src="https://portal.usep.edu.ph/static/media/LoginCover2.9527d6ec.png"
              alt="campus students"
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Register</h4>
              <p>Create your student account in seconds</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Login</h4>
              <p>Access your personal dashboard</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Submit & Track</h4>
              <p>Report issues and track them live</p>
            </div>
          </div>
        </section>

        {/* STUDENT REVIEWS */}
        <section className="reviews-section">
          <h2>What Students Say 💬</h2>
          <p className="reviews-sub">Hear from students who use CampusConnect every day</p>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div key={r.id} className="review-card">
                <p className="review-stars">⭐⭐⭐⭐⭐</p>
                <p className="review-text">"{r.review}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.avatar}</div>
                  <div>
                    <p className="review-name">{r.name}</p>
                    <p className="review-branch">{r.branch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        

      </main>

      <Footer />
    </div>
  );
}

export default Home;