import React from "react";
import styles from "./styles.module.css";
import { YoutubeSvg } from "@/svgs/youtube";
import { InstagramSvg } from "@/svgs/instagram";
import { FacebookSvg } from "@/svgs/facebook";
import { TiktokSvg } from "@/svgs/tiktok";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <h2>Iness</h2>
      <div className={styles.socials}>
        <YoutubeSvg />
        <InstagramSvg />
        <FacebookSvg />
        <TiktokSvg />
      </div>
      <p>2025 INESS Official Website. All rights reserved</p>
    </div>
  );
};
