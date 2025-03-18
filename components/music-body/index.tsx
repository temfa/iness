import React from "react";
import styles from "./styles.module.css";
import { Single } from "../single";

export const MusicBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>SINGLES</h2>
        <div className={styles.body}>
          <Single title="DON’T TURN YOUR BACK ON ME" text="Crotia Records" type="Single" />
          <Single title="BLUE PARADISE" text="Downtown Artist Soho London" type="Single" />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type="Single" />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type="Single" />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type="Single" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2>ALBUMS</h2>
        <div className={styles.body}>
          <Single title="DON’T TURN YOUR BACK ON ME" text="Crotia Records" type="Album" />
          <Single title="BLUE PARADISE" text="Downtown Artist Soho London" type="Album" />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type="Album" />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type="Album" />
          <Single title="CITY LIGHTS" text="Downtown Artist Soho London" type="Album" />
        </div>
      </div>
    </div>
  );
};
