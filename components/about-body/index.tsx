import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export const AboutBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>ABOUT INE$$</h2>
        <p>
          Meet INE$$, a multifaceted artist with a passion for music, dance, and performance. Born Ines Bozinovic Tvrktovic in Zagreb, Croatia, INE$$ has been captivating audiences
          with her talent and charisma since a young age.
        </p>
      </div>
      <Image src="/images/9.jpg" width={720} height={550} alt="Music" />
    </div>
  );
};
