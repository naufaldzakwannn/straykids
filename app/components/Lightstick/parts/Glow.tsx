type Props = {
  color: string;
  active: boolean;
};

export default function Glow({ color, active }: Props) {
  if (!active) return null;

  return (
    <g opacity=".95">
      {/* Glow Besar */}

      <circle cx="130" cy="120" r="105" fill={color} opacity=".18" filter="url(#glow)" />

      {/* Glow Sedang */}

      <circle cx="130" cy="120" r="82" fill={color} opacity=".28" filter="url(#glow)" />

      {/* Glow Kecil */}

      <circle cx="130" cy="120" r="60" fill={color} opacity=".42" filter="url(#glow)" />
    </g>
  );
}
