// Contact.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>Email: support@campusconnect.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Future Engineers College</p>
        <p>Have any questions or issues? Feel free to reach out to us anytime.</p>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;