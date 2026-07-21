"use client";

import Image from "next/image";
import styles from "./Lightstick.module.css";

export default function Lightstick() {
  return (
    <div className={styles.wrapper}>
      <Image src="/images/lightstick/lightstick.svg" alt="Lightstick" width={90} height={180} className={styles.lightstick} priority />
    </div>
  );
}
