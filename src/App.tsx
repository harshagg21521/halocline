import Hero from "./components/Hero";
import Nav from "./components/Nav";
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
       
      </main>
    </>
  );
}

export default App;
