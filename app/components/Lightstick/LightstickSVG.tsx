type Props = {
  color: string;
};

export default function LightstickSVG({ color }: Props) {
  return (
    <svg viewBox="0 0 200 420" width="90" height="180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="handle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="50%" stopColor="#222" />
          <stop offset="100%" stopColor="#555" />
        </linearGradient>

        <radialGradient id="bulb">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d7d7d7" />
        </radialGradient>

        <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="8" result="blur" />

          <feFlood floodColor={color} />

          <feComposite in2="blur" operator="in" />

          <feMerge>
            <feMergeNode />

            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Lampu */}

      <circle cx="100" cy="70" r="55" fill="url(#bulb)" filter={color === "transparent" ? "" : "url(#glow)"} />

      {/* Logo */}

      <circle cx="100" cy="70" r="18" fill="#B8860B" />

      {/* Neck */}

      <rect x="88" y="125" width="24" height="30" rx="8" fill="#333" />

      {/* Handle */}

      <rect x="82" y="155" width="36" height="190" rx="18" fill="url(#handle)" />

      {/* Button */}

      <circle cx="100" cy="320" r="6" fill="#777" />
    </svg>
  );
}
