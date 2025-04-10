import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
