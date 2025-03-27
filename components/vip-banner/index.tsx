import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const VipBanner = () => {
  return (
    <div className={styles.container}>
      <h2>WELCOME TO THE INNER CIRCLE</h2>
      <p>The ultimate VIP experience for INESS&apos;s most loyal fans</p>
      <h3>
        As a member, you&apos;ll gain exclusive access to premium content, personalized interactions, and unique benefits that will bring you closer to INESS than ever before.
      </h3>
      <Link href="/content">Get Started</Link>
    </div>
  );
};

export default VipBanner;
