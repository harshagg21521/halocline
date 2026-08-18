import { useEffect, useState } from "react";
import { nav } from "../lib/content";

export default function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${stuck ? " nav--stuck" : ""}`}>
      <a className="nav__mark" href="#top">
        <svg width="18" height="18" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="10" cy="10" r="4" fill="#79B8AE" />
          <circle cx="22" cy="10" r="4" fill="#F2A65A" />
          <circle cx="10" cy="22" r="4" fill="#E8467C" />
          <circle cx="22" cy="22" r="4" fill="#E8467C" opacity=".4" />
        </svg>
        Halocline
      </a>
      <nav className="nav__links" aria-label="Sections">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="btn btn--ghost" href="#contact">
        <span className="btn__dot" />
        Run a screen
      </a>
    </header>
  );
}
