import Reveal from "./Reveal";
import ActivityChart from "./ActivityChart";
import { stages } from "../lib/content";

export default function Platform() {
  return (
    <section className="band band--halite" id="platform">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">The platform</p>
          <h2 className="h2" style={{ marginTop: "1.25rem", maxWidth: "18ch" }}>
            Three stages. Nine months, median.
          </h2>
          <p className="prose" style={{ marginTop: "1.25rem" }}>
            The numbering here is real: a campaign runs in this order, and a
            candidate cannot skip a stage.
          </p>
        </Reveal>

        <div className="pipeline" style={{ marginTop: "3rem" }}>
          {stages.map((stage, i) => (
            <Reveal key={stage.n} delay={i * 0.08} className="stage">
              <span className="stage__num">{stage.n}</span>
              <h3 className="h3">{stage.title}</h3>
              <div>
                <p className="prose">{stage.body}</p>
                <p className="stage__meta">
                  {stage.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div
          className="grid grid--split"
          style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}
        >
          <Reveal>
            <p className="eyebrow">Result</p>
            <h3 className="h2" style={{ marginTop: "1rem", fontSize: "var(--step-2)" }}>
              What eleven rounds buys you
            </h3>
            <p className="prose" style={{ marginTop: "1rem" }}>
              A wild-type esterase loses most of its activity above one molar
              salt. After a campaign, the same scaffold has moved its optimum to
              where the process actually runs. Drag the salinity to see the gap.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ActivityChart />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
