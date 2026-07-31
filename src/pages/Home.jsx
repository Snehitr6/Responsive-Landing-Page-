import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default Home;