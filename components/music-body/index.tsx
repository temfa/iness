import React from "react";
import styles from "./styles.module.css";
import { Single } from "../single";

export const MusicBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>SINGLES</h2>
        <div className={styles.body}>
          <div className={styles.single}>
            <Single title="Same Mistake" text="INE$$" type="Single" src="/images/same-mistake.jpg" name="same-mistake" />
          </div>
          <div className={styles.single}>
            <Single title="I Adore you" text="INE$$" type="Single" src="/images/adore-you.png" name="adore-you" />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2>ALBUMS</h2>
        <div className={styles.body}>
          <Single title="Physical" text="INE$$" type="Album" src="/images/physical-cover.jpg" name="physical" />
          <Single title="DEBUT ALBUM INE$$" text="INE$$" type="Album" src="/images/debut.png" name="debut" />
        </div>
      </div>
    </div>
  );
};
