import Nav from "./components/Nav";
import { usePrefersReducedMotion, useSmoothScroll } from "./lib/hooks";

function App() {
  const reduced = usePrefersReducedMotion();
  useSmoothScroll(!reduced);
  return (
    <>
      <Nav/>
    </>
  );
}

export default App;
