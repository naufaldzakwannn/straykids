import Bulb from "./parts/Bulb";
import Handle from "./parts/Handle";
import Ring from "./parts/Ring";
import Button from "./parts/Button";
import Glow from "./parts/Glow";
import styles from "./Lightstick.module.css";

type Props = {
  color: string;
  glow?: boolean;
  width?: number;
  rainbow: boolean;
};

export default function LightstickSVG({ color, glow = false, width = 180, rainbow }: Props) {
  return (
    <svg
      className={`${styles.svg} ${glow ? styles.pulse : ""}`}
      width={width}
      viewBox="0 0 260 540"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transition: "filter .45s ease, transform .45s ease",
      }}
    >
      <defs>
        {/* =====================
            GLASS
        ====================== */}

        <radialGradient id="lightGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity=".95" />

          <stop offset="25%" stopColor={color} stopOpacity=".55" />

          <stop offset="55%" stopColor={color} stopOpacity=".18" />

          <stop offset="80%" stopColor={color} stopOpacity=".05" />

          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* =====================
            HANDLE
        ====================== */}

        <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5b5b5b" />
          <stop offset="20%" stopColor="#303030" />
          <stop offset="50%" stopColor="#1c1c1c" />
          <stop offset="80%" stopColor="#303030" />
          <stop offset="100%" stopColor="#5b5b5b" />
        </linearGradient>

        {/* =====================
            METAL
        ====================== */}

        <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#999" />
          <stop offset="50%" stopColor="#ddd" />
          <stop offset="100%" stopColor="#777" />
        </linearGradient>

        {/* =====================
            REFLECTION
        ====================== */}

        <linearGradient id="reflectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity=".9" />
          <stop offset="60%" stopColor="#fff" stopOpacity=".15" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>

        {/* =====================
            SHADOW
        ====================== */}

        <filter id="shadow">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity=".35" />
        </filter>

        {/* =====================
            GLOW
        ====================== */}

        <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="22" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />

            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <Glow color={color} active={glow} rainbow={rainbow} />

      <Bulb color={color} active={glow} rainbow={rainbow} />

      <Ring color={color} active={glow} rainbow={rainbow} />

      <Handle />

      <Button />
    </svg>
  );
}
