import { useCountUp, useInView } from "../lib/hooks";
import Reveal from "./Reveal";
import { stats } from "../lib/content";

type Stat = (typeof stats)[number];

function Stat({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);
  const decimals = "decimals" in stat ? (stat.decimals as number) : 0;
  const prefix = "prefix" in stat ? (stat.prefix as string) : "";
  const suffix = "suffix" in stat ? (stat.suffix as string) : "";

  return (
    <div className="stat">
      <span className="stat__value">
        {prefix}
        {value.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        {suffix}
      </span>
      <span className="stat__label">{stat.label}</span>
      <span className="stat__note">{stat.note}</span>
    </div>
  );
}

export default function Impact() {
  const { ref, seen } = useInView<HTMLDivElement>(0.25);

  return (
    <section className="band band--halite" id="impact">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Impact to date</p>
          <h2 className="h2" style={{ marginTop: "1.25rem", maxWidth: "22ch" }}>
            Seven years of sampling, counted honestly.
          </h2>
        </Reveal>
      </div>

      <div className="stats" style={{ marginTop: "3rem" }} ref={ref}>
        {stats.map((stat) => (
          <Stat key={stat.label} stat={stat} active={seen} />
        ))}
      </div>

      <div className="shell" style={{ marginTop: "2rem" }}>
        <p className="prose mono">
          Figures cover Jan 2019 – Jun 2026. Activity gains are measured at
          customer process conditions, not at assay optimum.
        </p>
      </div>
    </section>
  );
}
