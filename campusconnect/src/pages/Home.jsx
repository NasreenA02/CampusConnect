import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <Header />
      <main className="home">
        <section className="hero-center">
          <h1>CampusConnect</h1>
          <h2>Smart Campus Support System</h2>
          <button onClick={() => navigate("/login")}>Get Started</button>
        </section>

        <section className="hero-bottom">
          <div className="card feature-card">
            <h3>Features</h3>
            <ul>
              <li>Complaint Management</li>
              <li>Lost & Found</li>
              <li>Track Status</li>
            </ul>
          </div>
          <div className="card image-card">
            <img src="https://png.pngtree.com/png-clipart/20241112/original/pngtree-college-or-university-students-transparent-free-png-image_16966036.png" alt="campus" />
          </div>
        </section>

        <section className="portal-buttons">
          <button onClick={() => navigate("/login")}>Student Portal</button>
          <button onClick={() => navigate("/login")}>Admin Portal</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home;