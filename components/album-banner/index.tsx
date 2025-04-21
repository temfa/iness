"use client";
import React from "react";
import styles from "./styles.module.css";

export const AlbumBanner = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("/images/physical-banner.jpg")`,
      }}
    />
  );
};
