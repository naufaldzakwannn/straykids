export default function Button() {
  return (
    <g>
      {/* =====================================
          BUTTON SHADOW
      ====================================== */}

      <ellipse cx="130" cy="410" rx="14" ry="6" fill="#000" opacity=".18" />

      {/* =====================================
          BUTTON BODY
      ====================================== */}

      <circle cx="130" cy="404" r="13" fill="#2f2f2f" />

      {/* Metal Ring */}

      <circle cx="130" cy="404" r="13" fill="none" stroke="#8d8d8d" strokeWidth="1.5" />

      {/* Inner Button */}

      <circle cx="130" cy="404" r="8" fill="#555" />

      {/* Highlight */}

      <ellipse cx="126" cy="399" rx="3" ry="2" fill="white" opacity=".45" />

      {/* Power Icon */}

      <path
        d="
          M130 397
          L130 404
        "
        stroke="#ddd"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="
          M126 403
          A4 4 0 1 0 134 403
        "
        fill="none"
        stroke="#ddd"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </g>
  );
}
