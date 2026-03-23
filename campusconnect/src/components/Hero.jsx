import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section>
      <h1>CampusConnect</h1>
      <h2>Smart Campus Support System</h2>

      <button onClick={() => navigate("/login")}>
        Get Started
      </button>
    </section>
  );
}

export default Hero;