type Props = {
  color: string;
  active: boolean;
};

export default function Glow({ color, active }: Props) {
  if (!active) return null;

  return (
    <g opacity=".95">
      {/* Outer Glow */}

      <circle cx="130" cy="120" r="110" fill={color} opacity=".08" filter="url(#glow)" />

      {/* Mid Glow */}

      <circle cx="130" cy="120" r="90" fill={color} opacity=".16" filter="url(#glow)" />

      {/* Inner Glow */}

      <circle cx="130" cy="120" r="70" fill={color} opacity=".25" filter="url(#glow)" />

      {/* Core Glow */}

      <circle cx="130" cy="120" r="52" fill={color} opacity=".45" filter="url(#glow)" />
    </g>
  );
}
