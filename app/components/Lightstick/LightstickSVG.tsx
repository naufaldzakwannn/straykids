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
};

export default function LightstickSVG({ color, glow = false, width = 180 }: Props) {
  return (
    <svg
      className={styles.svg}
      width={width}
      viewBox="0 0 260 540"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      style={{
        transition: "all .45s ease",
      }}
    >
      <defs>
        {/* =====================
            GLASS
        ====================== */}

        <radialGradient id="glassGradient">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".98" />
          <stop offset="45%" stopColor="#efefef" stopOpacity=".92" />
          <stop offset="80%" stopColor="#d7d7d7" stopOpacity=".82" />
          <stop offset="100%" stopColor="#bdbdbd" stopOpacity=".75" />
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

        <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="10" result="blur" />

          <feFlood floodColor={color} />

          <feComposite operator="in" in2="blur" />

          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <Glow color={color} active={glow} />

      <Bulb color={color} active={glow} />

      <Ring color={color} active={glow} />

      <Handle />

      <Button />
    </svg>
  );
}
