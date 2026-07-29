"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./Lightstick.module.css";

const modes = ["off", "white", "gold", "red", "blue", "rainbow"] as const;

type LightMode = (typeof modes)[number];

export default function Lightstick() {
  const [mode, setMode] = useState<LightMode>("off");

  function nextMode() {
    const current = modes.indexOf(mode);
    const next = (current + 1) % modes.length;
    setMode(modes[next]);
  }

  const modeClass = useMemo(() => {
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
  }, [mode]);

  return (
    <div className={styles.wrapper}>
      <button onClick={nextMode} className={`${styles.button} ${modeClass}`} aria-label="Lightstick">
        <Image src="/images/lightstick/lightstick.svg" alt="Lightstick" width={90} height={180} priority className={styles.lightstick} />

        <span className={styles.badge}>{mode.toUpperCase()}</span>
      </button>
    </div>
  );
}
