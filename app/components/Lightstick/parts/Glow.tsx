type Props = {
  color: string;
  active: boolean;
  rainbow?: boolean;
};

export default function Glow({ color, active, rainbow = false }: Props) {
  if (!active) return null;

  return (
    <g>
      <circle cx="130" cy="120" r="72" fill="url(#lightGlow)" filter="url(#glow)" />

      <circle cx="130" cy="120" r="55" fill={color} opacity=".12" />

      <ellipse cx="118" cy="102" rx="9" ry="6" fill="white" opacity=".55" />
    </g>
  );
}
