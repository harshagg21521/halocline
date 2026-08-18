import Capabilities from "./components/Capabilities";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import Halocline from "./components/Halocline";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Innovation from "./components/Innovation";
import Nav from "./components/Nav";
import Platform from "./components/Platform";
import { usePrefersReducedMotion, useSmoothScroll } from "./lib/hooks";

function App() {
  const reduced = usePrefersReducedMotion();
  useSmoothScroll(!reduced);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Innovation />
        {/* Descending into the hypersaline body: dark gives way to halite. */}
        <Halocline from="#04141A" to="#F1F4F0" />
        <Platform />
        <Halocline from="#F1F4F0" to="#04141A" />
        <Capabilities />
        <Halocline from="#04141A" to="#F1F4F0" />
        <Impact />
        <Halocline from="#F1F4F0" to="#04141A" />
        <FinalCta/>
      </main>
      <Footer />
    </>
  );
}

export default App;
