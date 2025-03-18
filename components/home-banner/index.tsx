import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export const HomeBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p>LATEST RELEASE</p>
        <h2>LET’S DANCE</h2>
        <Link href="/music">Play Now</Link>
      </div>
      <div className={styles.navigation}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
