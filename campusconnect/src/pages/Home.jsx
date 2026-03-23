import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Features/>

      {/* Action Buttons */}
      <section>
        <button>Student Portal</button>
        <button>Admin Portal</button>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;