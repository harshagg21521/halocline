import { usePrefersReducedMotion, useSmoothScroll } from "./lib/hooks";

function App() {
  const reduced = usePrefersReducedMotion();
  useSmoothScroll(!reduced);
  return (
    <>
      <h1>Hey</h1>
    </>
  );
}

export default App;
