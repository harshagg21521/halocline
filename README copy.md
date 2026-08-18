# Halocline

An animated landing page for a fictional biotechnology company that mines
enzymes from hypersaline brine pools and evolves them for industrial reactors.

Built for Round 1 · Task 01 — Creative Frontend Developer.

**Live site:** _add your deployment URL here_

---

## Run it locally

```bash
git clone <your-repo-url>
cd halocline
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check, then production build into dist/
npm run preview    # serve the production build
npm run lint       # type-check only
```

Node 18+ required.

## Deploy

The output is a static `dist/` folder, so any static host works.

- **Vercel** — import the repo; framework preset _Vite_, build `npm run build`, output `dist`.
- **Netlify** — build `npm run build`, publish directory `dist`.

## Stack

| Concern        | Choice                        | Why                                                                   |
| -------------- | ----------------------------- | --------------------------------------------------------------------- |
| Build          | Vite + React 18 + TypeScript  | Fast dev server, strict types, no framework overhead the page needs.   |
| Styling        | Hand-written CSS + custom properties | The design leans on a token system and two theme bands; custom properties express that more directly than utility classes. |
| Animation      | Framer Motion                 | Declarative scroll-triggered entries and SVG path drawing.            |
| Smooth scroll  | Lenis                         | Inertial scrolling, disabled entirely under reduced-motion.           |
| Data viz       | Hand-rolled SVG               | No chart library — two Gaussian curves and a plate grid don't justify one. |

No images are shipped. Every visual on the page is SVG or CSS, so there is
nothing to lazy-load and nothing to compress.

## Structure

```
src/
  components/
    AssayPlate.tsx     96-well plate, the signature interaction
    ActivityChart.tsx  activity vs. salinity, slider-driven
    Halocline.tsx      the band divider
    Reveal.tsx         one scroll-entry primitive used page-wide
    Nav / Hero / Innovation / Platform / Capabilities / Impact / FinalCta / Footer
  lib/
    content.ts         all copy and figures, kept out of components
    hooks.ts           smooth scroll, reduced motion, in-view, count-up, seeded PRNG
  styles/
    tokens.css         colour, type scale, spacing
    app.css            reset, layout, components
```

## Design and animation approach

See [DESIGN.md](./DESIGN.md).

## Accessibility

- Skip link, semantic landmarks, one `h1`.
- `prefers-reduced-motion` is honoured at three levels: CSS transitions collapse,
  Lenis never initialises, the plate stops auto-advancing, and counters snap to
  their final value.
- Both data visuals carry `role="img"` with an `aria-label` that states the
  current readout in words; the plate readout is an `aria-live` region.
- Visible focus ring on every interactive element, contrast checked against both
  the brine and halite bands.

## Notes

Halocline is not a real company. Copy, figures, and site names were written for
this exercise.
