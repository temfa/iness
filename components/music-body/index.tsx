import React from "react";
import styles from "./styles.module.css";
import { Single } from "../single";

export const MusicBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>SINGLES</h2>
        <div className={styles.body}>
          <Single title="DON’T TURN YOUR BACK ON ME" text="Crotia Records" type="Single" src="/images/song.png" />
          <Single title="BLUE PARADISE" text="Downtown Artist Soho London" type="Single" src="/images/song.png" />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type="Single" src="/images/song.png" />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type="Single" src="/images/song.png" />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type="Single" src="/images/song.png" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2>ALBUMS</h2>
        <div className={styles.body}>
          <Single title="Physical" text="Iness" type="Album" src="/images/physical-cover.jpg" />
        </div>
      </div>
    </div>
  );
};
