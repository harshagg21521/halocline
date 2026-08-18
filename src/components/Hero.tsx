import { motion } from "framer-motion";
import AssayPlate from "./AssayPlate";
import { heroTicker } from "../lib/content";

const rise = {
  hidden: { opacity: 0, y: 34 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="band band--flush hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="shell hero__inner">
        <div>
          <motion.p
            className="eyebrow"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Halophilic enzyme engineering · est. 2019
          </motion.p>

          <motion.h1
            className="h1"
            style={{ marginTop: "1.25rem" }}
            variants={rise}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Enzymes that don&rsquo;t quit at{" "}
            <span className="accent">four molar salt.</span>
          </motion.h1>

          <motion.p
            className="lede"
            style={{ marginTop: "1.5rem" }}
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
          >
            We pull candidate enzymes out of hypersaline brine pools and evolve
            them until they hold up in your reactor — not just in buffer at
            pH&nbsp;7.
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <a className="btn btn--primary" href="#contact">
              <span className="btn__dot" />
              Run a screen
            </a>
            <a className="btn btn--ghost" href="#platform">
              Read the platform brief
            </a>
          </motion.div>

          <motion.dl
            className="hero__ticker"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={4}
          >
            {heroTicker.map((item) => (
              <div key={item.k}>
                <dd className="v">{item.v}</dd>
                <dt>{item.k}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <AssayPlate />
        </motion.div>
      </div>
    </section>
  );
}
