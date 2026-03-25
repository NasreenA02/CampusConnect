import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.css";

function Help() {
  return (
    <>
      <Header />

      <div className="page-container">
        <h1>Help & Support</h1>

        <h3>How to submit a complaint?</h3>
        <p>Login → Go to dashboard → Click "Submit Complaint"</p>

        <h3>How to track complaint?</h3>
        <p>Go to dashboard → Click "Track Complaints"</p>

        <h3>Lost something?</h3>
        <p>Use the Lost & Found section to report or find items.</p>

        <h3>Still need help?</h3>
        <p>Contact us through the Contact page.</p>
      </div>

      <Footer />
    </> 
  );
}

export default Help;