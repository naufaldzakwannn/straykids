type Props = {
  color: string;
  active: boolean;
};

export default function Ring({ color, active }: Props) {
  return (
    <g>
      {/* =====================================
          TOP METAL COLLAR
      ====================================== */}

      <ellipse
        cx="130"
        cy="205"
        rx="34"
        ry="9"
        fill={active ? color : "url(#metalGradient)"}
        opacity={active ? 0.45 : 1}
        style={{
          transition: "all .45s ease",
        }}
      />

      <rect
        x="96"
        y="205"
        width="68"
        height="18"
        rx="4"
        fill={active ? color : "url(#metalGradient)"}
        opacity={active ? 0.3 : 1}
        style={{
          transition: "all .45s ease",
        }}
      />

      {active && <ellipse cx="130" cy="214" rx="40" ry="12" fill={color} opacity=".18" filter="url(#glow)" />}

      <ellipse cx="130" cy="223" rx="34" ry="9" fill="#8f8f8f" />

      {/* =====================================
          HIGHLIGHT
      ====================================== */}

      <rect x="100" y="208" width="60" height="2" rx="1" fill="white" opacity=".45" />

      {/* =====================================
          DECORATIVE RINGS
      ====================================== */}

      <rect x="98" y="226" width="64" height="3" rx="2" fill="#444" />

      <rect x="98" y="234" width="64" height="3" rx="2" fill="#666" />

      {/* =====================================
          SHADOW
      ====================================== */}

      <ellipse cx="130" cy="241" rx="30" ry="4" fill="#000" opacity=".15" />
    </g>
  );
}
