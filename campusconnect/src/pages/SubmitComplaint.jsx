import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SubmitComplaint() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!title || !category || !description || !location) {
      alert("Please fill all fields");
      return;
    }

    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    const newComplaint = {
      id: Date.now(),
      title,
      category,
      description,
      location,
      studentEmail: user?.email,
      studentName: user?.name,
      status: "Pending",
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric", month: "short", year: "numeric"
      }),
    };

    complaints.push(newComplaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="inner-page">

        <button className="back-btn" onClick={() => navigate("/student")}>← Back</button>
        <h1>Submit a Complaint</h1>
        <p className="inner-page-sub">Fill in the details below and we'll look into it.</p>

        {submitted ? (
          <div className="success-box">
            <div className="success-icon">✅</div>
            <h3>Complaint Submitted!</h3>
            <p>Your complaint has been recorded. You can track it from your dashboard.</p>
            <button onClick={() => navigate("/track-complaints")}>Track Complaints</button>
            <button onClick={() => { setSubmitted(false); setTitle(""); setCategory(""); setDescription(""); setLocation(""); }}>
              Submit Another
            </button>
          </div>
        ) : (
          <div className="form-card">
            <label className="form-label">Complaint Title</label>
            <input className="form-input" type="text" placeholder="e.g. Broken fan in classroom"
              value={title} onChange={(e) => setTitle(e.target.value)} />

            <label className="form-label">Category</label>
            <select className="form-input" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select category</option>
              <option>Electricity</option>
              <option>Cleanliness</option>
              <option>Water Supply</option>
              <option>Infrastructure</option>
              <option>Internet / WiFi</option>
              <option>Other</option>
            </select>

            <label className="form-label">Location</label>
            <input className="form-input" type="text" placeholder="e.g. Block A, Room 203"
              value={location} onChange={(e) => setLocation(e.target.value)} />

            <label className="form-label">Description</label>
            <textarea className="form-input form-textarea" placeholder="Describe the issue in detail..."
              value={description} onChange={(e) => setDescription(e.target.value)} />

            <button className="submit-btn" onClick={handleSubmit}>Submit Complaint</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SubmitComplaint;