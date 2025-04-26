"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const AlbumBanner = ({ slug }: { slug: string }) => {
  const [banner, setBanner] = useState("");
  useEffect(() => {
    const data = [
      {
        slug: "physical",
        src: "/images/physical-banner.jpg",
      },
      {
        slug: "debut",
        src: "/images/debut.png",
      },
    ];
    const filter = data.find((item) => item.slug === slug);
    setBanner(filter?.src as string);
  }, [slug]);
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${banner})`,
      }}
    />
  );
};
