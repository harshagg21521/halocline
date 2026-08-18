import type { CSSProperties } from "react";

type Props = { from: string; to: string };

/**
 * The boundary the company is named after: the layer where two densities of
 * water meet and light refracts. Used as the divider between page bands.
 */
export default function Halocline({ from, to }: Props) {
  return (
    <div
      className="halocline"
      aria-hidden="true"
      style={{ "--halocline-from": from, "--halocline-to": to } as CSSProperties}
    />
  );
}
