import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const W = 640;
const H = 280;
const PAD = { top: 18, right: 18, bottom: 34, left: 40 };
const MAX_SALT = 5; // molar NaCl

/** Gaussian response curves — the shape a real activity-vs-salinity assay gives. */
const wildType = (s: number) => Math.exp(-((s - 0.25) ** 2) / (2 * 0.5 ** 2));
const evolved = (s: number) => 0.97 * Math.exp(-((s - 3.5) ** 2) / (2 * 1.85 ** 2));

const x = (s: number) => PAD.left + (s / MAX_SALT) * (W - PAD.left - PAD.right);
const y = (v: number) => H - PAD.bottom - v * (H - PAD.top - PAD.bottom);

function path(fn: (s: number) => number) {
  return Array.from({ length: 121 }, (_, i) => {
    const s = (i / 120) * MAX_SALT;
    return `${i === 0 ? "M" : "L"}${x(s).toFixed(1)},${y(fn(s)).toFixed(1)}`;
  }).join(" ");
}

export default function ActivityChart() {
  const [salt, setSalt] = useState(3.4);
  const wtPath = useMemo(() => path(wildType), []);
  const evPath = useMemo(() => path(evolved), []);

  const wt = wildType(salt);
  const ev = evolved(salt);

  return (
    <div className="chart">
      <div className="chart__legend">
        <span>
          <i style={{ background: "#79B8AE" }} />
          Wild-type parent
        </span>
        <span>
          <i style={{ background: "#E8467C" }} />
          Evolved variant, round 11
        </span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Relative activity against salinity. At ${salt.toFixed(1)} molar sodium chloride the wild-type parent retains ${Math.round(wt * 100)} percent activity and the evolved variant retains ${Math.round(ev * 100)} percent.`}
      >
        {[0, 0.25, 0.5, 0.75, 1].map((v) => (
          <line
            key={v}
            x1={PAD.left}
            x2={W - PAD.right}
            y1={y(v)}
            y2={y(v)}
            stroke="rgba(14,49,61,.14)"
          />
        ))}
        {[0, 1, 2, 3, 4, 5].map((s) => (
          <text
            key={s}
            x={x(s)}
            y={H - 12}
            textAnchor="middle"
            fontSize="11"
            fontFamily="IBM Plex Mono, monospace"
            fill="rgba(4,20,26,.5)"
          >
            {s}M
          </text>
        ))}

        <motion.path
          d={wtPath}
          fill="none"
          stroke="#79B8AE"
          strokeWidth="2"
          strokeDasharray="5 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <motion.path
          d={evPath}
          fill="none"
          stroke="#E8467C"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.25, ease: "easeOut" }}
        />

        <line
          x1={x(salt)}
          x2={x(salt)}
          y1={PAD.top}
          y2={H - PAD.bottom}
          stroke="#F2A65A"
          strokeWidth="1"
        />
        <circle cx={x(salt)} cy={y(ev)} r="5" fill="#E8467C" />
        <circle cx={x(salt)} cy={y(wt)} r="5" fill="#79B8AE" />
      </svg>

      <div className="chart__slider">
        <label htmlFor="salinity">
          <span>Salinity</span>
          <span>{salt.toFixed(1)} M NaCl</span>
        </label>
        <input
          id="salinity"
          type="range"
          min={0}
          max={MAX_SALT}
          step={0.1}
          value={salt}
          onChange={(e) => setSalt(Number(e.target.value))}
        />
      </div>

      <div className="chart__values">
        <span>
          <b style={{ color: "#79B8AE" }}>{Math.round(wt * 100)}%</b>
          wild type
        </span>
        <span>
          <b style={{ color: "#E8467C" }}>{Math.round(ev * 100)}%</b>
          evolved
        </span>
      </div>
    </div>
  );
}
