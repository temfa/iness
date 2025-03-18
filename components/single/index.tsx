import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  title: string;
  text: string;
  type: "Single" | "Album";
};

export const Single: FC<Props> = ({ title, text, type }) => {
  return (
    <div className={styles.container}>
      <Image width={383} height={300} src={type === "Album" ? "/images/album.png" : "/images/song.png"} alt="Single" />
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
