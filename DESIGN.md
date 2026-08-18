# Design & animation approach

## Picking a subject before picking a look

"Biotech landing page" has a default appearance — a rotating DNA double helix,
abstract blue molecules, a gradient. Every one of those is generic because none
of them come from a specific company doing specific work.

So the first decision was to invent a company narrow enough to generate its own
visual language: **Halocline**, which samples hypersaline brine pools for
extremophile enzymes and runs directed evolution campaigns on them. Everything
downstream — palette, structure, the signature interaction — is derived from
that, not chosen for taste.

## Colour

The palette is taken from the subject rather than from a mood board.

| Token       | Hex       | Where it comes from                                        |
| ----------- | --------- | ---------------------------------------------------------- |
| `brine-900` | `#04141A` | A hypersaline pool at depth reads near-black teal.          |
| `brine-700` | `#0E313D` | The mixing layer above the halocline.                       |
| `halite-50` | `#F1F4F0` | Salt crust — a cool off-white, not paper white.             |
| `ruber`     | `#E8467C` | Bacterioruberin. Halophilic archaea are genuinely magenta.  |
| `carotene`  | `#F2A65A` | The amber end of the same carotenoid family; used for hits. |
| `saline`    | `#79B8AE` | Shallow brine; carries labels and rules.                    |

Magenta is the accent because the organisms are that colour, which is a
defensible reason rather than a stylistic one.

## Structure: the page crosses the halocline

A halocline is the boundary where two densities of water meet and stop mixing.
The page is built as alternating dark (`brine`) and light (`halite`) bands,
joined by a `Halocline` divider component that renders the gradient and a thin
refraction line. Section theming is a single class swap that rewrites the
semantic tokens, so no component knows which band it sits in.

The only numbering on the page is on the three pipeline stages, because a
campaign genuinely runs in that order and a candidate cannot skip a stage.
Numbering anything else would be decoration.

## Type

- **Syne** (700/800) for display — wide, slightly odd geometry, set very tight
  (-0.035em) at large sizes so headlines read as one mass.
- **Instrument Sans** for body — narrow enough to hold a 60ch measure without
  looking loose.
- **IBM Plex Mono** for every label, figure, and eyebrow. Lab instruments print
  in mono; using it for all data ties the readouts to the plate and the chart.

Three roles, three faces, no overlap between them.

## The signature: an interactive assay plate

The most characteristic artifact in this company's world is a 96-well plate, so
that is the hero visual instead of a helix.

- 96 wells, 12 × 8, rendered as SVG.
- Well brightness is relative enzyme activity. Wells above 0.82 get an amber
  ring — those are the hits carried into the next round.
- The plate walks itself through four rounds of directed evolution on load, then
  stops and hands control over. Later rounds shift the whole distribution up,
  not just a few wells, because selection carries the top percentile forward.
- Values come from a seeded PRNG (`mulberry32`), so a given round always renders
  identically. It is a readout, not a lava lamp.
- Hovering a well reads out its ID, variant tag, and activity; with no hover it
  shows the current top hit.

The second interactive element, in the research section, plots relative activity
against salinity for the wild-type parent and the evolved variant. Dragging the
slider moves a marker across both Gaussian response curves and updates the
percentages — it makes the whole value proposition legible in one gesture.

## Motion

Animation is concentrated rather than sprinkled:

1. **Load** — a staggered rise for the hero (eyebrow → headline → lede → CTAs →
   figures), with the plate arriving last and then beginning its campaign.
2. **Scroll** — one `Reveal` primitive shared page-wide, so every entry uses the
   same 0.75s curve and threshold. The strata column gets a slow parallax drift
   against the copy beside it, which is how a water column looks as you descend
   past it. The chart draws its curves via `pathLength`. The impact figures count
   up once on entry.
3. **Micro** — capability cards draw a magenta underline from the left on hover
   or focus-within; buttons lift 2px; the nav condenses and gains a blur past
   40px.

The plate entry uses a CSS keyframe with a computed `animation-delay` rather than
96 animated React nodes.

Under `prefers-reduced-motion`, Lenis never initialises, all transitions collapse
to ~0ms, the plate stops auto-advancing, and counters snap to their final value.

## Restraint

The boldness is spent in one place — the plate. Everything around it is a flat
band, a rule, and mono labels: no shadows, no glassmorphism, no card that floats
for no reason, 2px corner radius throughout. The one thing removed late was a
third interactive visual in the capabilities grid; the page was better with the
grid quiet.
