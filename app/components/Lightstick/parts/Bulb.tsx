type Props = {
  color: string;
  active: boolean;
  rainbow?: boolean;
};

export default function Bulb({ color, active, rainbow = false }: Props) {
  return (
    <g filter="url(#shadow)">
      {/* =====================================
          OUTER GLASS
      ====================================== */}

      <circle cx="130" cy="120" r="82" fill="url(#glassGradient)" />

      {/* Outer Stroke */}

      <circle cx="130" cy="120" r="82" fill="none" stroke="#d6d6d6" strokeWidth="2" />

      {/* =====================================
          INNER GLASS
      ====================================== */}

      <circle cx="130" cy="120" r="67" fill="#ffffff" opacity=".18" />

      {/* =====================================
          LED RING
      ====================================== */}

      <circle cx="130" cy="120" r="53" fill="none" stroke={color} strokeWidth="8" filter={active ? "url(#glow)" : undefined}>
        {rainbow && (
          <animate
            attributeName="stroke"
            values="
            #ff3b3b;
            #ff9800;
            #ffe600;
            #4caf50;
            #2196f3;
            #9c27b0;
            #ff3b3b"
            dur="6s"
            repeatCount="indefinite"
          />
        )}
      </circle>

      {active && <circle cx="130" cy="120" r="60" fill="none" stroke={color} strokeWidth="18" opacity=".18" filter="url(#glow)" />}

      {/* =====================================
          INNER CORE
      ====================================== */}

      <circle
        cx="130"
        cy="120"
        r="34"
        fill={active ? color : "#f4f4f4"}
        opacity={active ? 0.2 : 1}
        style={{
          transition: "all .45s ease",
        }}
      >
        {rainbow && (
          <animate
            attributeName="fill"
            values="
            #ff3b3b;
            #ff9800;
            #ffe600;
            #4caf50;
            #2196f3;
            #9c27b0;
            #ff3b3b"
            dur="6s"
            repeatCount="indefinite"
          />
        )}
      </circle>

      {/* =====================================
          CENTER EMBLEM
      ====================================== */}

      <circle cx="130" cy="120" r="14" fill="#C9A961" />

      <circle cx="130" cy="120" r="7" fill="#1a1a1a" />

      {/* =====================================
          BIG REFLECTION
      ====================================== */}

      <ellipse cx="98" cy="84" rx="20" ry="36" fill="url(#reflectionGradient)" opacity=".9" transform="rotate(-18 98 84)" />

      {/* =====================================
          SMALL REFLECTION
      ====================================== */}

      <ellipse cx="158" cy="155" rx="9" ry="16" fill="white" opacity=".35" transform="rotate(25 158 155)" />

      {/* =====================================
          TOP HIGHLIGHT
      ====================================== */}

      <ellipse cx="130" cy="55" rx="36" ry="12" fill="white" opacity=".20" />

      {/* =====================================
          BOTTOM SHADOW
      ====================================== */}

      <ellipse cx="130" cy="183" rx="42" ry="10" fill="#999" opacity=".12" />
    </g>
  );
}
