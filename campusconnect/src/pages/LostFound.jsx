import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LostFound() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const [tab, setTab] = useState("browse");
  const [itemName, setItemName] = useState("");
  const [itemLocation, setItemLocation] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [type, setType] = useState("lost");
  const [submitted, setSubmitted] = useState(false);

  const items = JSON.parse(localStorage.getItem("lostFoundItems")) || [];

  const handleSubmit = () => {
    if (!itemName || !itemLocation || !itemDesc) {
      alert("Please fill all fields");
      return;
    }
    const newItem = {
      id: Date.now(),
      itemName, itemLocation, itemDesc, type,
      reportedBy: user?.name,
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric", month: "short", year: "numeric"
      }),
    };
    const updated = [...items, newItem];
    localStorage.setItem("lostFoundItems", JSON.stringify(updated));
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="inner-page">
        <button className="back-btn" onClick={() => navigate("/student")}>← Back</button>
        <h1>Lost & Found</h1>
        <p className="inner-page-sub">Report a lost item or browse items found on campus.</p>

        {/* TABS */}
        <div className="tabs">
          <button className={tab === "browse" ? "tab active-tab" : "tab"} onClick={() => { setTab("browse"); setSubmitted(false); }}>
            🔍 Browse Items
          </button>
          <button className={tab === "report" ? "tab active-tab" : "tab"} onClick={() => { setTab("report"); setSubmitted(false); }}>
            📢 Report Item
          </button>
        </div>

        {/* BROWSE */}
        {tab === "browse" && (
          <div className="complaint-list">
            {items.length === 0 ? (
              <div className="empty-box">
                <p>📭 No items reported yet.</p>
              </div>
            ) : (
              items.reverse().map((item) => (
                <div key={item.id} className="complaint-card">
                  <div className="complaint-top">
                    <div>
                      <h3>{item.itemName}</h3>
                      <p className="complaint-meta">📍 {item.itemLocation} · 🗓 {item.date} · 👤 {item.reportedBy}</p>
                    </div>
                    <span className={`status-badge ${item.type === "lost" ? "badge-yellow" : "badge-green"}`}>
                      {item.type === "lost" ? "Lost" : "Found"}
                    </span>
                  </div>
                  <p className="complaint-desc">{item.itemDesc}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* REPORT */}
        {tab === "report" && (
          submitted ? (
            <div className="success-box">
              <div className="success-icon">✅</div>
              <h3>Item Reported!</h3>
              <p>Your report has been saved. Others can now see it.</p>
              <button onClick={() => { setSubmitted(false); setItemName(""); setItemLocation(""); setItemDesc(""); }}>
                Report Another
              </button>
              <button onClick={() => setTab("browse")}>Browse Items</button>
            </div>
          ) : (
            <div className="form-card">
              <label className="form-label">Type</label>
              <select className="form-input" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="lost">Lost Item</option>
                <option value="found">Found Item</option>
              </select>

              <label className="form-label">Item Name</label>
              <input className="form-input" type="text" placeholder="e.g. Blue water bottle"
                value={itemName} onChange={(e) => setItemName(e.target.value)} />

              <label className="form-label">Location</label>
              <input className="form-input" type="text" placeholder="e.g. Library, 2nd floor"
                value={itemLocation} onChange={(e) => setItemLocation(e.target.value)} />

              <label className="form-label">Description</label>
              <textarea className="form-input form-textarea" placeholder="Describe the item..."
                value={itemDesc} onChange={(e) => setItemDesc(e.target.value)} />

              <button className="submit-btn" onClick={handleSubmit}>Submit Report</button>
            </div>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default LostFound;