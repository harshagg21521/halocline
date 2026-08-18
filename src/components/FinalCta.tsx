import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="band" id="contact">
      <div className="shell cta">
        <Reveal>
          <p className="eyebrow">Start a campaign</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="cta__line">
            Tell us the condition <span className="accent">that breaks it.</span>
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lede">
            Send the substrate, the temperature, and the solvent. We come back
            within ten working days with a shortlist from the library and a
            campaign plan — or an honest note that it is not a fit.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <a className="btn btn--primary" href="mailto:hello@halocline.bio">
              <span className="btn__dot" />
              Email the lab
            </a>
            <a className="btn btn--ghost" href="#platform">
              Read the platform brief
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
