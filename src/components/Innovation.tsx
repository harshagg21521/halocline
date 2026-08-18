import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import { strata } from "../lib/content";

export default function Innovation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // The strata column drifts slower than the copy beside it, the way a
  // water column looks when you descend past it.
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="band" id="innovation">
      <div className="shell grid grid--split">
        <Reveal>
          <p className="eyebrow">Why brine</p>
          <h2 className="h2" style={{ marginTop: "1.25rem" }}>
            Life already solved this. We just had to go where it&rsquo;s hardest
            to live.
          </h2>
        </Reveal>

        <div ref={ref}>
          <Reveal delay={0.1}>
            <p className="prose">
              An enzyme that works in a lab tube usually falls apart in a
              reactor. The salt is wrong, the temperature is wrong, and there is
              a solvent in there that nothing in nature ever met.
            </p>
            <p className="prose">
              Organisms in hypersaline pools spent two billion years under
              exactly those pressures. Their proteins are built with acidic
              surfaces that hold a hydration shell when there is almost no free
              water left. That is not a trick we invented — it is a starting
              scaffold we sample, then improve.
            </p>
            <p className="prose">
              Below is the column we sample from. Everything commercially
              interesting sits under the halocline, where the water stops mixing
              and the chemistry stops being forgiving.
            </p>
          </Reveal>

          <motion.div className="strata" style={{ y, marginTop: "2rem" }}>
            {strata.map((layer, i) => (
              <motion.div
                key={layer.label}
                className="strata__layer"
                style={{ background: layer.tint }}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span>{layer.label}</span>
                <span>{layer.depth}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
