import Reveal from "./Reveal";
import { capabilities } from "../lib/content";

export default function Capabilities() {
  return (
    <section className="band" id="capabilities">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">What we take on</p>
          <h2 className="h2" style={{ marginTop: "1.25rem", maxWidth: "20ch" }}>
            Bring us a reaction that keeps failing.
          </h2>
        </Reveal>

        <div className="caps" style={{ marginTop: "3rem" }}>
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={(i % 3) * 0.07} className="cap">
              <span className="cap__tag">{cap.tag}</span>
              <h3 className="h3">{cap.title}</h3>
              <p>{cap.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
