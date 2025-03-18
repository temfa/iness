import React from "react";
import styles from "./styles.module.css";
import { PlaySvg } from "@/svgs/play";
import { HeartSvg } from "@/svgs/heart";
import { ThreeDotsSvg } from "@/svgs/three-dots";
import Image from "next/image";

export const MusicBanner = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/ellipse.png" className={styles.ellipse} width={453} height={453} alt="Ellipse" />
      <Image src="/images/woman.png" className={styles.woman} width={575} height={656} alt="Woman" />
      <div className={styles.layout}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p>Single</p>
            <h2>DON’T TURN YOUR BACK ON ME</h2>
            <h4>Crotia records, 2020</h4>
            <h6>5 mins 12 secs</h6>
          </div>
          <div className={styles.play}>
            <div className={styles.left}>
              <PlaySvg />
              <p>Don’t turn your back on me</p>
            </div>
            <div className={styles.left}>
              <p>5:12</p>
              <HeartSvg />
              <ThreeDotsSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
