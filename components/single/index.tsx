"use client";
import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  text: string;
  type: "Single" | "Album";
  src: string;
};

export const Single: FC<Props> = ({ title, text, type, src }) => {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => {
        if (type === "Album") router.push("/album/physical");
      }}>
      <Image width={383} height={300} src={src} alt="Single" />
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
