// About.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-container">
        <h1>About GrievEase</h1>
        <p>GrievEase is a smart campus support system designed to help students manage complaints, track issues, and access lost & found services easily.</p>
        <p>Our goal is to make campus life smoother by providing a centralized platform where students and admins can communicate efficiently.</p>
        <p>Whether it's reporting problems or finding lost items, everything is just a few clicks away.</p>
      </div>
      <Footer />
    </div>
  );
}
export default About;