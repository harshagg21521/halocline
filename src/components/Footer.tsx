import { footerLinks } from "../lib/content";

export default function Footer() {
  return (
    <footer className="band band--flush">
      <div className="shell footer">
        <div className="footer__cols">
          <div>
            <p className="h3">Halocline</p>
            <p className="prose" style={{ marginTop: ".75rem", maxWidth: "34ch" }}>
              Enzyme discovery and directed evolution from hypersaline systems.
              Antofagasta, Chile · Boston, MA.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4>{heading}</h4>
              <ul style={{ display: "grid", gap: ".4rem" }}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#top">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__base">
          <span>© 2026 Halocline Biosciences</span>
          <span>Fictional company, built as a frontend exercise</span>
        </div>
      </div>
    </footer>
  );
}
