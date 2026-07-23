"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Lightstick.module.css";

export default function Lightstick() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.button} ${isOn ? styles.on : ""}`} onClick={() => setIsOn(!isOn)} aria-label="Toggle Lightstick">
        <Image src="/images/lightstick/lightstick.svg" alt="Lightstick" width={90} height={180} priority className={styles.lightstick} />
      </button>
    </div>
  );
}
