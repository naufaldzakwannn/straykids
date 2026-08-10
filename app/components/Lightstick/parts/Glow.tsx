type Props = {
  color: string;
  active: boolean;
  rainbow?: boolean;
};

export default function Glow({ color, active, rainbow = false }: Props) {
  if (!active) return null;

  return (
    <g opacity=".95">
      {/* Outer */}
      <circle cx="130" cy="120" r="90" fill={color} opacity=".05" filter="url(#glow)" />

      {/* Mid */}
      <circle cx="130" cy="120" r="75" fill={color} opacity=".12" filter="url(#glow)" />

      {/* Inner */}
      <circle cx="130" cy="120" r="62" fill={color} opacity=".22" filter="url(#glow)" />

      {/* Core */}
      <circle cx="130" cy="120" r="50" fill={color} opacity=".35" filter="url(#glow)" />
    </g>
  );
}
