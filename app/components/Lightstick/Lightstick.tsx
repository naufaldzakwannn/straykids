"use client";

import LightstickSVG from "./LightstickSVG";
import { useMemo, useState } from "react";
import styles from "./Lightstick.module.css";

const modes = ["off", "white", "gold", "red", "blue", "rainbow"] as const;

type LightMode = (typeof modes)[number];

export default function Lightstick() {
  const [mode, setMode] = useState<LightMode>("off");

  function nextMode() {
    const index = modes.indexOf(mode);

    setMode(modes[(index + 1) % modes.length]);
  }

  function getModeClass(mode: LightMode) {
    switch (mode) {
      case "white":
        return styles.white;

      case "gold":
        return styles.gold;

      case "red":
        return styles.red;

      case "blue":
        return styles.blue;

      case "rainbow":
        return styles.rainbow;

      default:
        return "";
    }
  }

  const COLOR_MAP: Record<LightMode, string> = {
    off: "#ffffff",
    white: "#ffffff",
    gold: "#FFD54A",
    red: "#ff4d4d",
    blue: "#5DAEFF",
    rainbow: "#ff00ff",
  };
  return (
    <div className={styles.wrapper}>
      <button onClick={nextMode} className={`${styles.button} ${getModeClass(mode)}`} aria-label="Lightstick">
        <LightstickSVG width={120} color={COLOR_MAP[mode]} glow={mode !== "off"} rainbow={mode === "rainbow"} />

        <span className={styles.badge}>{mode.toUpperCase()}</span>
      </button>
    </div>
  );
}
