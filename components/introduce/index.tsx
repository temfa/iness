import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export const Introduce = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2>INTRODUCING INESS</h2>
        <p>Talented Singer/ Song writer/ Performer</p>
      </div>
      <div className={styles.wrapper}>
        <Image src="/images/iness.png" width={720} height={626} alt="Iness" />
        <div className={styles.content}>
          <div>
            <h2>MEET INESS</h2>
            <p>
              A talented singer, songwriter, and performer from Croatia. With a rich background in music, dance, and acting, INESS has been making waves in the entertainment
              industry.
            </p>
            <h4>
              Music Career Highlights <br /> - Released music with Sony Records and Croatia Records <br /> - Performed at notable festivals and events, including TunnelFest Munich
              and London New Year&apos;s Day Parade <br /> - Collaborated with international producers and artists
            </h4>
            <Link href="/about">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
