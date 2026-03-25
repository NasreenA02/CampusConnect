import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages.css";

function Contact() {
  return (
    <div className="app-container">
      <Header />

      <div className="page-container">
        <h1>Contact Us</h1>

        <p>Email: support@campusconnect.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Your College Campus</p>

        <p>
          Have any questions or issues? Feel free to reach out to us anytime.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;