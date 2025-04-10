import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
