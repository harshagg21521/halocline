export const nav = [
  { href: "#innovation", label: "Innovation" },
  { href: "#platform", label: "Platform" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#impact", label: "Impact" },
];

export const heroTicker = [
  { k: "Median activity gain", v: "×310" },
  { k: "Brine pools sampled", v: "38" },
  { k: "Lab to reactor", v: "9 mo" },
];

export const strata = [
  { label: "Surface brine · 3.1 % NaCl", depth: "0–2 m", tint: "#164652" },
  { label: "Mixing layer", depth: "2–9 m", tint: "#0e313d" },
  { label: "Halocline", depth: "9–11 m", tint: "#7a2f52" },
  { label: "Hypersaline body · 26 % NaCl", depth: "11–34 m", tint: "#0a2530" },
  { label: "Anoxic floor · sampling target", depth: "34 m +", tint: "#061a21" },
];

export const stages = [
  {
    n: "01",
    title: "Discovery",
    body: "We sample the anoxic floor of hypersaline pools, sequence what grows there, and bank the strains. Most of it has never been cultured. The interesting part is what those organisms had to solve to stay alive.",
    meta: ["12,400 strains banked", "38 sites", "Metagenomic assembly"],
  },
  {
    n: "02",
    title: "Evolution",
    body: "A candidate enzyme goes into rounds of error-prone PCR and recombination. Each round expresses into 96-well plates, gets assayed against your actual substrate, and only the top percentile is carried forward.",
    meta: ["4.7M variants / campaign", "6–11 rounds", "Substrate-matched assay"],
  },
  {
    n: "03",
    title: "Scale",
    body: "The winning variant is moved into a production host, fermented to 5,000 L, and formulated. We hand over the strain, the assay, and the batch records — not a slide deck.",
    meta: ["5,000 L fermentation", "Strain + assay handoff", "cGMP-adjacent"],
  },
];

export const capabilities = [
  {
    tag: "Discovery",
    title: "Extremophile metagenome mining",
    body: "Sequence-first search across our brine-pool library for scaffolds that already tolerate your conditions.",
  },
  {
    tag: "Engineering",
    title: "Directed evolution campaigns",
    body: "Six to eleven rounds of mutagenesis and selection, run against the substrate you actually process.",
  },
  {
    tag: "Engineering",
    title: "Thermostability & solvent tolerance",
    body: "Melting point, half-life in DMSO, and activity retention after 200 hours at process temperature.",
  },
  {
    tag: "Screening",
    title: "Assay development",
    body: "If there is no readout for your reaction, we build one — colorimetric, fluorogenic, or MS-based.",
  },
  {
    tag: "Production",
    title: "Expression strain engineering",
    body: "Codon optimisation, secretion tags, and host swaps to get titre out of a difficult protein.",
  },
  {
    tag: "Production",
    title: "Scale-up to 5,000 L",
    body: "Fermentation, downstream recovery, and formulation, with batch records you can hand to an auditor.",
  },
];

export const stats = [
  { value: 12400, suffix: "", label: "Strains banked", note: "From 38 hypersaline sites across four continents." },
  { value: 4.7, suffix: "M", decimals: 1, label: "Variants per campaign", note: "Screened, not modelled. Every one expressed and assayed." },
  { value: 310, prefix: "×", label: "Median activity gain", note: "Evolved variant against wild-type parent, at process conditions." },
  { value: 41, suffix: "", label: "Enzymes in production", note: "Running today in textiles, plastics recovery, and food processing." },
];

export const footerLinks = {
  Company: ["About", "Careers", "Publications", "Press"],
  Contact: ["Request a screen", "Partnerships", "hello@halocline.bio"],
};
