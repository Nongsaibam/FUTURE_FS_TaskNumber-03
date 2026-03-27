import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Features from "./components/Features";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="reservation">
        <Booking />
      </section>
      <Footer />
    </div>
  );
}

export default App;