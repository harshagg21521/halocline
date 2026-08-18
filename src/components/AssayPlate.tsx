import { useEffect, useMemo, useState } from "react";
import { mulberry32, usePrefersReducedMotion } from "../lib/hooks";

const COLS = 12;
const ROWS = 8;
const PITCH = 36;
const PAD_X = 30;
const PAD_Y = 30;
const MAX_ROUND = 4;
const ROW_LETTERS = "ABCDEFGH".split("");

type Well = { id: string; cx: number; cy: number; value: number; variant: string };

/**
 * Builds one plate of 96 wells for a given round of directed evolution.
 * Seeded so a round always looks the same — it is a readout, not a lava lamp.
 */
function buildPlate(round: number): Well[] {
  const rand = mulberry32(9001 + round * 137);
  // Later rounds carry more of the top percentile forward, so the whole
  // distribution shifts up rather than a few wells spiking.
  const exponent = 5.5 - round * 1.05;

  return Array.from({ length: COLS * ROWS }, (_, i) => {
    const r = Math.floor(i / COLS);
    const c = i % COLS;
    const value = Math.pow(rand(), exponent);
    return {
      id: `${ROW_LETTERS[r]}${c + 1}`,
      cx: PAD_X + c * PITCH + PITCH / 2,
      cy: PAD_Y + r * PITCH + PITCH / 2,
      value,
      variant: `HcL-${(4100 + round * 96 + i).toString()}`,
    };
  });
}

export default function AssayPlate() {
  const reduced = usePrefersReducedMotion();
  const [round, setRound] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hover, setHover] = useState<Well | null>(null);

  const wells = useMemo(() => buildPlate(round), [round]);
  const best = useMemo(
    () => wells.reduce((a, b) => (b.value > a.value ? b : a)),
    [wells],
  );
  const mean = useMemo(
    () => wells.reduce((sum, w) => sum + w.value, 0) / wells.length,
    [wells],
  );

  // Walks itself through the campaign once, then stops and hands over.
  useEffect(() => {
    if (!auto || reduced || round >= MAX_ROUND) return;
    const timer = setTimeout(() => setRound((r) => r + 1), 3800);
    return () => clearTimeout(timer);
  }, [auto, reduced, round]);

  const shown = hover ?? best;

  return (
    <figure className="plate">
      <div className="plate__head">
        <span className="plate__label">
          Assay plate · campaign HcL-{2200 + round}
        </span>
        <span className="plate__label">Round {round} / {MAX_ROUND}</span>
      </div>

      <svg
        className="plate__grid"
        viewBox={`0 0 ${PAD_X + COLS * PITCH + 12} ${PAD_Y + ROWS * PITCH + 10}`}
        role="img"
        aria-label={`96-well assay plate, evolution round ${round} of ${MAX_ROUND}. Mean relative activity ${mean.toFixed(2)}.`}
      >
        {ROW_LETTERS.map((letter, r) => (
          <text
            key={letter}
            x={12}
            y={PAD_Y + r * PITCH + PITCH / 2 + 4}
            fill="rgba(241,244,240,.35)"
            fontSize="10"
            fontFamily="IBM Plex Mono, monospace"
          >
            {letter}
          </text>
        ))}
        {Array.from({ length: COLS }, (_, c) => (
          <text
            key={c}
            x={PAD_X + c * PITCH + PITCH / 2}
            y={16}
            textAnchor="middle"
            fill="rgba(241,244,240,.35)"
            fontSize="10"
            fontFamily="IBM Plex Mono, monospace"
          >
            {c + 1}
          </text>
        ))}

        {wells.map((well, i) => {
          const isHit = well.value > 0.82;
          return (
            <g key={well.id}>
              <circle
                cx={well.cx}
                cy={well.cy}
                r={13}
                fill="rgba(255,255,255,.03)"
                stroke="rgba(121,184,174,.18)"
              />
              <circle
                className="well"
                cx={well.cx}
                cy={well.cy}
                r={10 + well.value * 2.5}
                fill="#E8467C"
                fillOpacity={0.06 + well.value * 0.94}
                stroke={isHit ? "#F2A65A" : "transparent"}
                strokeWidth={1.2}
                style={
                  reduced
                    ? undefined
                    : { animation: `wellIn .5s ${0.004 * i}s both var(--ease)` }
                }
                onMouseEnter={() => setHover(well)}
                onMouseLeave={() => setHover(null)}
              />
            </g>
          );
        })}
      </svg>

      <figcaption className="plate__foot">
        <p className="plate__readout" aria-live="polite">
          {hover ? "Well" : "Top hit"} <b>{shown.id}</b> · {shown.variant} ·{" "}
          <b>{shown.value.toFixed(2)}</b> rel. activity · mean{" "}
          <b>{mean.toFixed(2)}</b>
        </p>
        <div className="plate__rounds" aria-hidden="true">
          {Array.from({ length: MAX_ROUND + 1 }, (_, i) => (
            <span className="plate__pip" key={i} data-on={i <= round} />
          ))}
        </div>
        <button
          className="plate__run"
          disabled={round >= MAX_ROUND}
          onClick={() => {
            setAuto(false);
            setRound((r) => Math.min(r + 1, MAX_ROUND));
          }}
        >
          {round >= MAX_ROUND ? "Campaign complete" : "Run next round"}
        </button>
        {round >= MAX_ROUND && (
          <button
            className="plate__run"
            onClick={() => {
              setAuto(false);
              setRound(0);
            }}
          >
            Reset
          </button>
        )}
      </figcaption>
    </figure>
  );
}
