import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export const MusicInfo = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/music.png" width={720} height={550} alt="Music" />
      <div className={styles.content}>
        <h2>MUSIC & PERFORMANCES</h2>
        <p>
          With a background in acting, modeling, and music, INESS has released several successful singles, including &quot;Physical&quot; (Sony Records), &quot;Don&apos;t Turn Your
          Back on Me,&quot; and &quot;Blue Paradise.&quot; Her music style blends pop, R&B, and electronic elements, showcasing her unique voice and artistry.
        </p>
      </div>
    </div>
  );
};
