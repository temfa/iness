"use client";
import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSong } from "@/redux/slice/song";

type Props = {
  title: string;
  text: string;
  type: "Single" | "Album";
  src: string;
  action?: () => void;
  name: string;
};

export const Single: FC<Props> = ({ title, text, type, src, name }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div
      className={styles.container}
      onClick={() => {
        if (type === "Album") router.push(`/album/${name}`);
        else dispatch(setSong(`/songs/${name}.mp3`));
      }}>
      <Image width={383} height={300} src={src} alt="Single" />
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
